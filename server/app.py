import flask
import json

app = flask.Flask(__name__)

@app.route("/get_order", methods=["POST"])
def get_order():
    locations = flask.request.data
    print(locations)

    return locations
