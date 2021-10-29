import requests
import urllib
from Prims import *

API_KEY = "AIzaSyBJV8TjEiPpRp1fOtS8YhJWKU9JqXB7yYE"
base_url = "https://maps.googleapis.com/maps/api/distancematrix/json?"

def to_url_string(addrs):
    return urllib.parse.quote_plus('|'.join(addrs))

if __name__ == '__main__':
    ## List of locations to test
    locations = [
        "Eugene,OR",
        "Seattle,WA",
        "Boise,ID"
    ]

    ## Get the request info ready
    payload = {}
    headers = {}
    formatted_locations = to_url_string(locations)
    request_url = base_url + "origins=" + formatted_locations \
                           + "&destinations=" + formatted_locations \
                           + "&key=" + API_KEY

    ## Get the data and transfer into dict
    response = requests.request("GET", request_url, headers=headers, data=payload)
    data = response.json()

    ## Create the distance matrix
    distanceMatrix = []
    for i, row in enumerate(data["rows"]):
        distanceMatrix.append([])
        for elem in row["elements"]:
            distanceMatrix[i].append(elem["distance"]["value"])
    for row in range(len(distanceMatrix)):
        print(distanceMatrix[row])
    #print(distanceMatrix)
    print(solve(distanceMatrix))
