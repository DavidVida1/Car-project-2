import { useEffect } from "react";
import meetingTypeArray from "./MeetingTypeArray";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <MeetingHeroImgSection>
      {meetingTypeArray.map((meetingImg, index) => {
        return (
          <aside>
            <img className="heroImg" src={meetingImg.heroImg}></img>
            <h2 className="heroText">{meetingImg.text}</h2>
          </aside>
        );
      })}
    </MeetingHeroImgSection>
  );
};

const MeetingHeroImgSection = styled.section`
  position: relative;
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  aside {
    height: 30vh;
    width: auto;
    box-shadow: var(--background-color-black) 0px 0px 0px 2px;
    position: relative;
    .heroImg {
      width: 100%;
      height: 100%;
    }

    .heroText {
      position: absolute;
      font-size: 8.5rem;
      font-weight: 900;
      bottom: 8px;
      left: 50px;
      color: rgba(255, 255, 255, 0.3);

      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }

    &:hover {
      transform: scale(1.1);
      transition: transform 1s ease-in-out;
      z-index: 2;
    }
  }
`;
export default About;
