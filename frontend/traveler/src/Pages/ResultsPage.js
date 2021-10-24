import styled from "styled-components";
import MainMaps from "../Components/MyDirectionsRenderer";

function ResultsPage() {
  return (
    <PageWrapper>
      <MapContainer>
        <MainMaps
          origin={"eugene, or"}
          waypoints={[{ location: "bend, or", stopover: true }]}
        ></MainMaps>
      </MapContainer>
      <WrittenResults>
        <ResultsTitle>Route Results</ResultsTitle>
      </WrittenResults>
    </PageWrapper>
  );
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
  top: 25.5vw;
  border-radius: 20px;
  border: solid 4px black;
  box-shadow: 10px 10px 30px black;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ResultsTitle = styled.h1``;
