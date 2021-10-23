import GOOGLEMAPS_API_KEY from "../key";
import React, { Component } from "react";
import { render } from "react-dom";
import { GoogleComponent } from "react-google-location";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div>
        <GoogleComponent
          apiKey={GOOGLEMAPS_API_KEY}
          language={"en"}
          country={"country:in|country:us"}
          coordinates={true}
          locationBoxStyle={"custom-style"}
          locationListStyle={"custom-style"}
          onChange={(e) => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default HomeComponent;
