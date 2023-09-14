import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterSection>
      <aside>
        <section className="logoText">
          <img src="./assets/svg/logoReverse.svg" alt="MeetNRev Logo" />{" "}
          <p>
            Rev Up Your Social Life: Connect, Cruise, and Create Memories with
            MeetNRev!&nbsp;
            <a href="#">Learn more</a>
          </p>
        </section>

        <section className="navigationFooter">
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

        <section className="media">
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
      <DivVerticalTitle>
        <VerticalTitle>Designed by DAV</VerticalTitle>
      </DivVerticalTitle>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  position: relative;
  background-color: var(--color-black);
  color: white;
  & a {
    color: var(--color-white);
  }

  & aside {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
    gap: 300px;
    padding: 2rem 0 0.5rem 0;
  }

  & h3 {
    font-weight: bold;
    color: var(--color-yellow);
  }

  & .logoText {
    padding-left: var(--footer-padding);

    a {
      text-decoration: underline;
      width: max-content;
    }
    & a:hover {
      color: var(--color-yellow);
    }
  }

  & section p {
    display: flex;
    flex-direction: column;
    width: 300px;
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
    padding-top: 2rem;

    h3 {
      margin-bottom: 5px;
    }
    ul {
      display: flex;
      flex-direction: row;
    }

    svg {
      border-radius: 50%;
      padding: 6px;
      font-size: 30px;
      border: 1px solid var(--color-white);
    }
    svg:hover {
      border-color: var(--color-yellow);
      background-color: var(--color-green);
      color: var(--color-yellow);
    }
  }

  & .copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 40px 15px 40px;
    margin-top: 20px;
    position: relative;
    width: 100%;

    & .termsPrivacy a {
      margin: 0 20px;
    }
  }

  & .copyright:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    background-color: rgba(255, 255, 255, 1);
    height: 1px;
    width: 90%;
  }
`;
const DivVerticalTitle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 2px;
  transform: translate(-5%, 15%);
  border: 1px dotted rgb(255, 255, 255);
  background-color: rgb(231, 60, 55);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 2px;
`;
const VerticalTitle = styled.div`
  padding: 1px;
  letter-spacing: 5px;
  rotate: 180deg;
  writing-mode: vertical-rl;
  border: 1px dotted rgb(255, 255, 255);
  background-color: rgb(231, 60, 55);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 2px;
`;

export default Footer;
