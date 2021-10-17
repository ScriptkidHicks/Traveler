import styled from "styled-components";
import MyComponent from "../Components/MyComponent";
import MainMaps from "../Components/MyDirectionsRenderer";

function ResultsPage() {
  return (
    <PageWrapper>
      <MapContainer>
        <MainMaps></MainMaps>
      </MapContainer>
    </PageWrapper>
  );
}

export default ResultsPage;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5297ac;
`;

const MapContainer = styled.div`
  width: 40vw;
  height: 40vw;
  background-color: grey;
  border: 2px solid black;
  border-radius: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50vh;
  left: 50vw;
`;
