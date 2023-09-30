import styled from "styled-components";
import { useEffect, useState } from "react";
import { PiArrowElbowRightDownDuotone } from "react-icons/pi";
import meetingTypeArray from "./MeetingTypeArray";
import { useNavigate } from "react-router-dom";

const MeetingDescription = () => {
  const navigate = useNavigate();
  const [meetingSelected, setMeetingSelected] = useState(() => {
    return 0;
  });

  const selectMeeting = (meetingId) => {
    let index = meetingTypeArray.findIndex((meeting) => {
      return meeting.id == meetingId;
    });

    setMeetingSelected(index);
  };

  useEffect(() => {
    let meetingsBtn = document.getElementsByClassName("meetingsButton");
    Array.from(meetingsBtn).forEach((element) => {
      element.classList.remove("active");
    });

    let meetingActive = document.getElementById(
      meetingTypeArray[meetingSelected].name
    );
    meetingActive.classList.add("active");

    console.log(meetingActive);
  }, [meetingSelected]);

  return (
    <MeetingDescriptionContainer>
      <nav className="leftSection">
        <ul>
          <header>
            <h4>
              Meeting Type <img src="./assets/svg/carGo.svg" alt="carGo img" />
            </h4>
          </header>
          {meetingTypeArray.map((meeting, index) => {
            return (
              <li id="list">
                <button
                  id={meeting.name}
                  onClick={() => {
                    selectMeeting(meeting.id);
                  }}
                  className="meetingsButton"
                  key={index}
                >
                  {meeting.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="rightSection">
        <h3>{meetingTypeArray[meetingSelected].name}</h3>
        <p>{meetingTypeArray[meetingSelected].description}</p>

        <button className="joinButton" onClick={() => navigate(`/meetings`)}>
          Explore Meetings
          <PiArrowElbowRightDownDuotone />
        </button>

        <aside className="meetingTypeVideo">
          <video
            src={meetingTypeArray[meetingSelected].video}
            autoPlay
            loop
            muted
            alt="meeting-type-video"
          ></video>
        </aside>
      </section>
    </MeetingDescriptionContainer>
  );
};

const MeetingDescriptionContainer = styled.section`
  position: relative;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 30% auto;
  background-color: var(--color-off-white);
  padding: 3rem var(--meetingType-padding);

  .leftSection {
    justify-self: center;
    align-self: center;
    padding: 20px;
    border-radius: 8px;

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
    }

    header {
      display: flex;
      flex-direction: row;
      width: 100%;
      grid-area: 1 / 1 / span 1 / span;

      h4 {
        font-weight: 600;
        font-size: 4rem;
        line-height: 1.3;
        color: var(--color-green);
        margin-bottom: 12px;
        text-align: center;
        width: 100%;
        img {
          height: 3rem;
        }
      }

      img {
        height: 20px;
      }
    }

    li .meetingsButton {
      font-size: 2.1rem;
      font-weight: 600;
      background-color: transparent;
      color: var(--color-gray);
      padding: 16px 8px;
      width: 100%;
      border-radius: 8px;
      text-align: left;
      box-shadow: inset 0 0 0px var(--color-green);

      &:hover {
        color: var(--color-green);
        text-indent: 10px;
        transition: color 0.5s ease-in-out, all 0.5s linear;
      }
      &.active {
        color: var(--color-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
      }
    }
  }

  .rightSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 5px;
    margin-left: 60px;

    .joinButton {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;

      color: var(--color-white);
      font-weight: bold;

      padding: 8px 4px;
      margin-bottom: 24px;

      background-color: var(--color-green);
      border: 1px solid var(--color-green);
      border-radius: 15px;

      svg {
        color: var(--color-white);
        font-size: 15px;
      }

      &:hover {
        color: var(--color-yellow);
        transform: scale(1.1);
      }
    }
    p {
      padding: 12px 12px 12px 0px;
      color: var(--color-black);
      font-size: 1.5rem;
    }
    h3 {
      font-size: 5.5rem;
      font-weight: 600;
    }

    .meetingTypeVideo {
      display: block;
      aspect-ratio: 16 / 9;
      height: auto;
      width: 1200px;

      video {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  }
`;
export default MeetingDescription;
