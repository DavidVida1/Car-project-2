import { useEffect } from "react";
import styled from "styled-components";
import meetingTypeArray from "./MeetingTypeArray";

const Meetings = () => {
  return (
    <MeetingsSection>
      <nav className="meetingsNav">
        <a>All</a>
        {meetingTypeArray.map((meeting) => {
          return <a key={meeting.name}>{meeting.name}</a>;
        })}
      </nav>

      <DiscoverItem>Hello</DiscoverItem>
    </MeetingsSection>
  );
};

const MeetingsSection = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-off-white1);
  padding: 16rem 8rem;

  .meetingsNav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-gray);
    a {
      margin: 0rem 2.2rem;

      &:hover {
        color: var(--color-green);
      }
    }
  }
`;
const DiscoverItem = styled.div`
  display: grid;
  position: relative;
  place-items: center;
  margin-top: 12rem;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  width: 300px;
  height: 360px;
  transition: 1s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    transform: translateY(10px);
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s all;
    opacity: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 204, 255, 0.1),
      rgba(191, 128, 64, 0.3)
    );
  }
  &:hover:after {
    opacity: 1;
  }
`;
export default Meetings;
