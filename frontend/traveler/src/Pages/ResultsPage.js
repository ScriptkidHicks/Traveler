import styled from "styled-components";
import MainMaps from "../Components/MyDirectionsRenderer";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import classes from "../CSS/Results.module.css";
import { Link } from "react-router-dom";

function ResultsPage(props) {
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState(null);
  const [waypoints, setWaypoints] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const resultsFetch = {
      method: "POST",
      headers: { "Content-Type": "application/json", Contents: "request" },
      body: JSON.stringify({
        locations: props.places,
      }),
    };

    // fetch("/get_order", resultsFetch).then((response) => {
    //   if (response.status === 201) {
    //     let data = response.json();
    //     console.log(data);
    //     console.log("these are the waypoints ", response.waypoints);
    //     setWaypoints(response.waypoints);
    //     setOrigin(response.origin);
    //   } else {
    //     alert("I think you touched the endpoint wrong!");
    //   }
    // });

    fetch("/api/get_order", resultsFetch)
      .then((response) => {
        if (response.status !== 201) throw new Error(response.status);
        else return response.json(); // Convert the response to json to get the data
      })
      .then((data) => {
        // Convert the strings into objects so the map can parse them
        let waypoints = data.waypoints.map((loc) => JSON.parse(loc));
        setWaypoints(waypoints);
        setOrigin(data.origin);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);

  if (loading) {
    console.log(props.places[0]);
    if (props.places[0] === undefined || props.places[0] === null) {
      alert("It looks like you didn't enter an origin point!");
      history.push("/MainPage");
    }
    return (
      <PageWrapper>
        <h1
          style={{
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "50vh",
            left: "50vw",
            color: "white",
          }}
        >
          Loading...
        </h1>
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <MapContainer>
          <MainMaps origin={origin} waypoints={waypoints}></MainMaps>
        </MapContainer>
        <Link to="/MainPage" className={classes.form__button}>
          New Route
        </Link>
      </PageWrapper>
    );
  }
}

export default ResultsPage;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5297ac;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const MapContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45vh;
  left: 50vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ResultsTitle = styled.h1``;
