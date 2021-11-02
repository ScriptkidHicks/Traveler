"""
Filename: app.py

Purpose:
The main application file for the Flask server.
Contains an endpoint '/get_order' that takes a list of locations, parses them through the google distance matrix api, 
    creates an adjacency matrix from those distances, parses the matrix through the algorithm, and returns the result.

Authors: Jordan Smith
Group: //Todo
Last modified: 10/29/21
"""
import flask
import json
import urllib
import requests
from login import login_page
from key import API_KEY
import prims2

app = flask.Flask(__name__)
app.register_blueprint(login_page)

###
#   Globals
###
base_url = "https://maps.googleapis.com/maps/api/distancematrix/json?"


"""
to_url_string
    Converts the given list of locations to a string with url-encoding
    url-encoding translates " " -> "%20", "," -> "%2C", etc.
    We seperate the addresses with "|"
"""
def to_url_string(addrs):
    return urllib.parse.quote_plus("|".join(addrs))

"""
to_adj_mat
    Converts a given dictionary (from Google Distance Matrix API)
    into an adjacency matrix and returns that matrix
"""
def to_adj_mat(data):
    result = []
    
    for i, row in enumerate(data['rows']):
        result.append([])
        for elem in row['elements']:
            # Each element has distance and time keys
            # Both of those have a value (the raw value in km/sec), 
            # and a formatted value (123 Km or 1 hr 20 min)
            result[i].append(elem["distance"]["value"])

    return result

"""
pretty_print_matrix
    Just to see the matrix with formatting
"""
def pretty_print(mat):
    for row in mat:
        for col in row:
            print(col, end="\t")
        print()

""" 
POST request function
    Recieves a list of location objects 
    Parses the locations and generates a adjacency matrix from their relative distances
        (distances retrieved from Google Distance API)
    Sends the adj. matrix to the algorithm to get the ordering for travel
    Returns the proper ordering
"""
@app.route("/get_order", methods=["POST"])
def get_order():
    # Get the request data, convert it to a dictionary, and grab the 'locations' value
    request_data = json.loads(flask.request.data)['locations']

    # Grab only the locations that have values
    locations = [loc for loc in request_data if loc is not None]

    # Get the formatted addresses from the location dictionaries 
    addresses = []
    for location in locations:
        addresses.append(location['formatted_address'])


    # Save the first location
    origin = addresses[0]

    ## Prepare the Distance Matrix API call
    payload = headers = {}
    encoded_addresses = to_url_string(addresses)
    # We want to evaluate the distances from each point to every other point
    # This will allow us to generate the adjacency matrix
    request_url = base_url + "origins=" + encoded_addresses \
                           + "&destinations=" + encoded_addresses \
                           + "&key=" + API_KEY

    ## Call the API and turn the result into a python dict
    response = requests.request("GET", request_url, headers=headers, data=payload)
    data = response.json()

    ## Get the adjacency matrix from the data
    adjMatrix = to_adj_mat(data)

    # Debugging
    # pretty_print(adjMatrix)

    ## Call the algorithm with the adjacency matrix and get the optimal route
    algo_results = prims2.solve(adjMatrix)
    

    # Get the waypoints from the rest of the points
    # We don't need the first or last point from the algo_results, since they are just the origin
    waypoints = []
    for res in algo_results[1:-1]:
        waypoints.append('{"location":"' + addresses[res] + '","stopover":true}')
    #print(waypoints)

    return {"origin": origin, "waypoints": tuple(waypoints)}, 201