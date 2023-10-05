import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <img src="/assets/svg/logo.svg" alt="MeetNRev Logo" />
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">SetUpMeeting</a>
        </li>
      </ul>

      <article>
        <a href="#">Log in</a>
        <a href="#">Sign Up</a>
      </article>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;

  font-size: 1.9rem;
  padding-left: 6rem;
  padding-right: 6rem;

  z-index: 3;

  a:first-child {
    display: flex;
    vertical-align: center;
  }
  &:hover {
    background-color: var(--color-off-white);
    a {
      color: var(--color-black);
      text-shadow: none;
    }

    article {
      & a:last-child {
        color: var(--color-white);
      }
    }
  }

  ul {
    display: flex;
    height: 100%;
    column-gap: 20px;

    list-style: none;
  }
  li {
    display: block;
    width: 100%;
    line-height: 65px;
    padding: 0 10px;
  }
  li:hover {
    background-color: var(--color-off-white);

    & a {
      text-shadow: 1px 1px 1px var(--color-green);
    }
  }

  a {
    color: var(--color-white);
    text-shadow: 1px 1px 1px var(--color-green);
  }

  article {
    display: flex;
    align-self: center;
    column-gap: 20px;

    & a {
      align-self: center;
      height: auto;
      text-shadow: 1px 1px 1px var(--color-green);
    }

    & a:first-child {
      line-height: 65px;
      text-transform: uppercase;
      padding: 0px 10px;
    }

    & a:first-child:hover {
      background-color: var(--color-off-white);
      text-shadow: 1px 1px 1px var(--color-green);
    }

    & a:last-child {
      border: 1px solid var(--color-green);
      background-color: var(--color-green);
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
`;

export default Header;
