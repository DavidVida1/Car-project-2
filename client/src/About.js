import { useEffect } from "react";
import styled from "styled-components";

const About = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    cursor.parentElement.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
    cursor.parentElement.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
    });
    cursor.parentElement.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });
  }, []);

  return (
    <AboutSection>
      <h2 className="aboutText" id="about">
        Discover a website that brings car enthusiasts together to enjoy
        exhilarating car meets solely for the joy of having fun.
      </h2>
      <div className="cursor"></div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  display: flex;
  position: relative;
  height: 40vh;
  padding: 4rem 12rem;
  background-color: var(--background-color-black);

  .aboutText {
    width: 82%;
    height: auto;
    padding-right: 15%;
    color: rgba(255, 255, 255, 0.8);
    text-align: justify;
    font-size: 6.5rem;
    font-weight: 900;
    box-shadow: 25px 0 20px -25px rgba(0, 0, 0, 0.45);
  }

  .cursor {
    position: fixed;
    width: 20px;
    height: 20px;

    background-color: white;
    border-radius: 50%;

    transition: transform 0.1s;
    transform: translate(-50%, -50%);
    pointer-events: none;
    mix-blend-mode: difference;
  }

  .aboutText:hover ~ .cursor {
    transform: scale(5);
  }
`;
export default About;
