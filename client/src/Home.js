import styled from "styled-components";
import HeroVideo from "./assets/HeroVideo.mp4";
import About from "./About";
import MeetingDescription from "./MeetingDescription";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerHome>
        <video src={HeroVideo} autoPlay loop muted alt="hero-video" />
        <aside className="heroText">
          <h1>Rev Up Your Social Life </h1>
          <h2>
            Connect, Cruise, and Create Memories with MeetNRev<span>!</span>
          </h2>
          <button onClick={() => navigate(`/meetings`)}>Join a Meeting</button>
        </aside>
      </ContainerHome>
      <About />
      <MeetingDescription />
    </>
  );
};
const ContainerHome = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .heroText {
    position: absolute;

    top: 50%;
    left: 50%;
    width: 55%;
    padding: 20px;

    color: var(--color-white);
    font-weight: bold;
    text-align: center;

    /*border: 3px solid #f1f1f1;*/
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);

    transform: translate(-50%, -50%);

    & h1 {
      font-size: 8rem;
    }
    & h2 {
      font-size: 6rem;
    }
    & span {
      color: var(--color-yellow);
    }
    & button {
      margin-top: 20px;
      padding: 12px 24px;

      color: var(--color-white);
      font-weight: bold;
      font-size: 2rem;

      background-color: var(--color-green);
      border-radius: 25px;

      &:hover {
        color: var(--color-off-white);
        background-color: var(--color-dark-green);
      }
    }
  }
`;

export default Home;
