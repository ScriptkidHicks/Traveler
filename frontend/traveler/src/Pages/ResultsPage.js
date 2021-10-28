import styled from "styled-components";
import MainMaps from "../Components/MyDirectionsRenderer";
import { useState, useEffect } from "react";

function ResultsPage(props) {
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState(null);
  const [waypoints, setWaypoints] = useState(null);

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
    return (
      <PageWrapper>
        <h1>Loading...</h1>
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <MapContainer>
          <MainMaps origin={origin} waypoints={waypoints}></MainMaps>
        </MapContainer>
        <WrittenResults>
          <ResultsTitle>Route Results</ResultsTitle>
        </WrittenResults>
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
  top: 50vh;
  left: 65vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const WrittenResults = styled.div`
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 79vh;
  left: 19vw;
  top: 50vh;
  border-radius: 20px;
  border: solid 4px black;
  box-shadow: 10px 10px 30px black;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ResultsTitle = styled.h1``;
