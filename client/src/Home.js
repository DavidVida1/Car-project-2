import styled from "styled-components";
import test from "./assets/test.mp4";

const Home = () => {
  return (
    <ContainerHome>
      <video src={test} autoPlay loop muted />
    </ContainerHome>
  );
};
const ContainerHome = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Home;
