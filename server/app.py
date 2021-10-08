import flask
import logging

## Globals
app = flask.Flask(__name__)

@app.route("/")
def hello():
    return "Hello world!"

## Initialize/Run the application
if app.debug:
    app.logger.setLevel(logging.DEBUG)

if __name__ == "__main__":
    app.run(port="5000", host="0.0.0.0")