import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <FooterSection>
      <aside>
        <section className="logoText" data-aos="fade-up" data-aos-delay="100">
          <img src="/assets/svg/logoReverse.svg" alt="MeetNRev Logo" />{" "}
          <p>
            Rev Up Your Social Life: Connect, Cruise, and Create Memories with
            MeetNRev!&nbsp;
            <a href="#">Learn more</a>
          </p>
        </section>

        <section
          className="navigationFooter"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li href="#">
              <a href="#">SetUpMeeting</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </section>

        <section className="media" data-aos="fade-up" data-aos-delay="300">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="#">
                <FiFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FiTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </section>
      </aside>

      <section className="copyright">
        <div className>© 2023 MeetNRev. All Rights Reserved</div>
        <div className="termsPrivacy">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </section>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  position: relative;
  width: 100%;
  background-color: var(--color-black);
  color: white;
  font-size: 1.6rem;

  & a {
    color: var(--color-white);
  }

  & aside {
    display: grid;
    grid-template-columns: repeat(3, 25%);
    justify-content: space-around;
    width: 100%;
    padding: 3rem 0 0.5rem 0;
  }

  & h3 {
    color: var(--color-yellow);
    font-weight: bold;
  }

  & .logoText {
    padding-left: var(--footer-padding);

    a {
      width: max-content;
      text-decoration: underline;
    }
    & a:hover {
      color: var(--color-yellow);
    }
  }

  & section ul {
    gap: 10px;
  }

  & section li {
    line-height: 35px !important;
    padding-top: 5px;
  }

  .navigationFooter {
    padding-top: 2rem;

    & a:hover {
      color: var(--color-yellow);
    }
  }

  & .media {
    align-self: right;
    padding-top: 2rem;

    h3 {
      margin-bottom: 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }

    svg {
      padding: 6px;

      font-size: 3rem;
      border: 1px solid var(--color-white);
      border-radius: 50%;
    }
    svg:hover {
      background-color: var(--color-green);
      color: var(--color-yellow);

      border-color: var(--color-yellow);
    }
  }

  & .copyright {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding: 30px 40px 15px 40px;
    margin-top: 20px;

    & .termsPrivacy a {
      margin: 0 20px;
    }
  }

  & .copyright:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    height: 1px;
    width: 90%;

    background-color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 500px) {
    & aside {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);

      & .logoText {
        grid-column: 1/3;
        grid-row: 1/4;
      }

      & .navigationFooter {
        padding-left: 40px;
      }
    }
    & .copyright {
      width: 100%;
      align-self: center;
      gap: 10px;
      & .termsPrivacy a {
        margin: 0 0px;
      }
    }
  }
`;
export default Footer;
