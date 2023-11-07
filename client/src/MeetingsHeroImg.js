import { useEffect } from "react";
import meetingTypeArray from "./MeetingTypeArray";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <MeetingHeroImgSection>
      {meetingTypeArray.map((meetingImg, index) => {
        return (
          <aside
            key={index}
            className="imgContent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
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

  .imgContent {
    height: 250px;
    width: auto;
    box-shadow: var(--background-color-black) 0px 0px 0px 2px;
    position: relative;

    .heroImg {
      width: 100%;
      height: 100%;
      border: 2px solid var(--background-color-black);
    }

    .heroText {
      position: absolute;
      font-size: clamp(1rem, 4vw, 6.5rem);
      font-weight: 900;
      bottom: 8px;
      left: 50px;
      color: rgba(255, 255, 255, 0.3);
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
    &:hover .heroText {
      transition: transform 3s ease-in-out;
      color: rgba(242, 154, 46, 0.5);
    }
  }

  @media screen and (max-width: 1400px) {
    & .imgContent {
      height: 200px;
    }
  }

  @media screen and (max-width: 992px) {
    & .imgContent {
      height: 150px;
    }
  }
  @media screen and (max-width: 768px) {
    & .imgContent {
      height: 125px;
      & .heroText {
        left: 10px;
      }
    }
  }
`;
export default About;
