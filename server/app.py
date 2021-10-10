import flask
import json

app = flask.Flask(__name__)

@app.route("/get_order", methods=["POST"])
def get_order():
    locations = json.loads(flask.request.form.get('locations'))
    print(locations)


    return locations

# @app.route("/time")
# def get_time():
#     return {'time': time.strftime("%H:%M", time.localtime())}