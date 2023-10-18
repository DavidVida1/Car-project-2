import styled from "styled-components";
import HeroVideo from "./assets/HeroVideo.mp4";
import About from "./About";
import MeetingDescription from "./MeetingDescription";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MeetingsHeroImg from "./MeetingsHeroImg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <>
      <ContainerHome>
        <video src={HeroVideo} autoPlay loop muted alt="hero-video" />
        <aside className="heroText">
          <h1 data-aos="fade-down" data-aos-delay="100">
            Rev Up Your Social Life
          </h1>
          <h2 data-aos="fade-left" data-aos-delay="150">
            Connect, Cruise, and Create Memories with MeetNRev<span>!</span>
          </h2>
          <button onClick={() => navigate(`/meetings/all`)}>
            Join a Meeting
          </button>
        </aside>
      </ContainerHome>
      <About />
      <MeetingsHeroImg />
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
    width: max(375px, 55%);

    transform: translate(-50%, -50%);

    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--color-white);
    border-radius: 5px;
    font-weight: bold;
    text-align: center;

    & h1 {
      font-size: clamp(3rem, 4vw, 8rem);
    }
    & h2 {
      font-size: clamp(3rem, 4vw, 6rem);
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
