import flask
import time

app = flask.Flask(__name__)

@app.route("/time")
def get_time():
    return {'time': time.strftime("%H:%M", time.localtime())}