import styled from "styled-components";
import test from "./assets/test.mp4";
import MeetingDescription from "./MeetingDescription";

const Home = () => {
  const meetingTypeArray = [
    {
      name: "Chilling",
      description:
        "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
      video: chillingVid,
    },
    {
      name: "Cruising",
      description: "",
      video: cruisingVid,
    },
    {
      name: "Socialize",
      description: "",
      video: socializeVid,
    },
    {
      name: "notRacing",
      description: "",
      video: notRacingVid,
    },
  ];

  return (
    <>
      <ContainerHome>
        <video src={test} autoPlay loop muted />
        <h1 className="heroText">
          Rev Up Your Social Life: Connect, Cruise, and Create Memories with
          MeetNRev<span>!</span>
        </h1>
      </ContainerHome>
      <MeetingDescription />
    </>
  );
};
const ContainerHome = styled.div`
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
    text-align: center;
    top: 50%;
    left: 50%;
    width: 70%;
    padding: 20px;

    font-weight: bold;
    font-size: 65px;
    color: var(--color-white);
    transform: translate(-50%, -50%);

    border: 3px solid #f1f1f1;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & span {
    color: var(--color-yellow);
  }
`;

export default Home;
