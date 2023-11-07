import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const openNav = () => {
    let element = document.getElementById("mqNav");
    element.classList.add("open");
  };

  const closeNav = (e) => {
    e.preventDefault();

    let element = document.getElementById("mqNav");
    element.classList.remove("open");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <HeaderContainer data-aos="fade-down" data-aos-delay="100">
      <a href="/" className="logo">
        <img src="assets/svg/logo.svg" alt="MeetNRev Logo" />
      </a>

      <div id="mqNav" className="overlay">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>

        <ul className="overlay-content">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./#about">About</a>
          </li>
          <li>
            <a href="#">SetUpMeeting</a>
          </li>
          <li className="user">
            <a href="#" className="Login">
              Log in
            </a>
            <a href="#" className="sign">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <span className="burger" onClick={openNav}>
        &#9776;
      </span>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 65px;
  font-size: 2.5rem;
  font-weight: bold;
  z-index: 2;

  & .logo {
    position: relative;
    left: 15px;
    align-self: center;
  }

  &:hover {
    background-color: var(--color-off-white);

    & .overlay .overlay-content li a {
      color: var(--color-black);
      text-shadow: none;
    }

    & .overlay .overlay-content li a.sign {
      color: var(--color-off-white);
    }
  }

  & .overlay {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative; /* Stay in place */
    transition: 0.5s;

    &.open {
      width: 100%;
    }

    & .overlay-content {
      display: flex;
      width: 40%;
      flex-direction: row;
      justify-content: space-evenly;
      margin: auto;

      & li {
        align-self: center;
        & a {
          color: var(--color-white);

          text-shadow: 1px 1px 1px var(--color-green);
          transition: 0.3s; /* Transition effects on hover (color) */
          align-self: center;
        }
      }
      & .user {
        display: flex;
        position: absolute;
        right: 15px;
        gap: 10px;

        & .login {
        }
        & a.sign {
          border: 1px solid var(--color-green);
          background-color: var(--color-green);
          margin: 10px;
          border-radius: 20px;
          padding: 4px 16px;

          &:hover {
            color: var(--color-yellow);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
              rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
          }
        }
      }
    }

    & .closebtn {
      position: absolute;

      color: var(--color-white);
      top: 17px;
      right: 50px;
      font-size: 4rem;
      z-index: 2;

      &:hover {
        color: var(--color-gray);
      }
    }
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    & .burger {
      display: block;
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 35px;
    }
    & .logo {
      z-index: 5;
    }

    &:hover {
      background-color: transparent;

      & .overlay .overlay-content li a {
        color: var(--color-white);
        text-shadow: none;

        &.sign {
          color: var(--color-green);
        }
      }
    }

    & .overlay {
      height: 100vh;
      width: 0;
      position: fixed; /* Stay in place */
      z-index: 4; /* Sit on top */
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
      overflow-x: hidden; /* Disable horizontal scroll */
      transition: 0.5s;

      & div .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
      }

      & .overlay-content {
        position: relative;
        display: flex;
        flex-direction: column;
        top: 25%; /* 25% from the top */
        width: 100%; /* 100% width */
        justify-content: flex-start;
        margin-top: 30px;
        text-align: left;

        & .user {
          flex-direction: column;
          position: relative;
          right: 0;

          & a.sign {
            color: var(--color-green);
            border: none;
            background-color: transparent;
            margin: 10px 0px 10px 0px;
            border-radius: 0px;
            padding: 4px 0px;
          }
        }

        & li {
          padding: 15px 0px 15px 5px;
          align-self: flex-start;
          & a {
            font-size: 3.6rem;
            align-self: normal;

            color: #818181;
            display: block; /* Display block instead of inline */
            transition: 0.3s; /* Transition effects on hover (color) */
            &:hover {
              color: var(--color-yellow);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .closebtn {
      display: none;
    }
  }
`;

export default Header;
