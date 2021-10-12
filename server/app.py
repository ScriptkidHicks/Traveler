import flask
import json
import urllib
import requests

app = flask.Flask(__name__)

###
#   Globals
###
base_url = "https://maps.googleapis.com/maps/api/distancematrix/json?"
API_KEY = ""

"""
to_url_string
    Converts the given list of locations to a string with url-encoding
    url-encoding translates " " -> "%20", etc.
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
            # Both of those has a value (the raw value in km/sec), 
            # and a formatted value (123 Km or 1 hr 20 min)
            result[i].append(elem["distance"]["value"])

    return result

""" 
POST request function
"""
@app.route("/get_order", methods=["POST"])
def get_order():
    locations = flask.request.data
    ##print(locations)

    """ CODE FOR API/ALGORITHM CALL

    ## Get the addresses to a list
    addresses = []

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

    ## Call the algorithm with the adjacency matrix and get the optimal route
    """

    return locations
