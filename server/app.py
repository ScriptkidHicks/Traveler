import flask
import json
import urllib
import requests
from login import login_page
from key import API_KEY

app = flask.Flask(__name__)
app.register_blueprint(login_page)

###
#   Globals
###
base_url = "https://maps.googleapis.com/maps/api/distancematrix/json?"

# def json_response(body='', **kwargs):
#     kwargs['body'] = json.dumps(body or kwargs['body']).encode('utf-8')
#     kwargs['content_type'] = 'text/json'
#     return web.Response(**kwargs)

# @app.route('/login', methods=['POST'])
# def login():
#     # Get the data
#     request_data = (flask.request.data)

#     # Convert the data to dictionary 
#     user = json.loads(request_data.decode('utf-8').replace("'", '"'))

#     if user not in VALID_USERS:
#         return {'message': 'Wrong credentials'}, 400

#     payload = {
#         'user_id': user['username'],
#         'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
#     }

#     jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)

#     return {'token': jwt_token}, 200

@app.route("/test")
def test():
    return "hello world!"

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

    # Until algorithm is added, just return back in order
    return {"result": addresses}
