import { useEffect, useState } from "react";
import styled from "styled-components";
import meetingTypeArray from "./MeetingTypeArray";
import meetingdb from "./MeetingDb";
import { useNavigate } from "react-router-dom";
import MeetingCards from "./MeetingCards";

const Meetings = () => {
  const navigate = useNavigate();
  const [meetingSelectedIndex, setMeetingSelected] = useState(() => {
    return 0;
  });

  const [meetingDatabase, setMeetingDatabase] = useState(null);

  const selectMeeting = (meetingName) => {
    let index = meetingTypeArray.findIndex((meeting) => {
      return meeting.name == meetingName;
    });

    setMeetingSelected(index);
  };

  useEffect(() => {
    let meetingsBtn = document.getElementsByClassName("meetingsButton");

    Array.from(meetingsBtn).forEach((element) => {
      element.classList.remove("active");
    });

    let meetingActiveId =
      0 <= meetingSelectedIndex &&
      meetingSelectedIndex < meetingTypeArray.length
        ? meetingTypeArray[meetingSelectedIndex].name
        : "all";

    let meetingActive = document.getElementById(meetingActiveId);
    meetingActive.classList.add("active");

    /*-------meetingsSelectedByType-------*/
    console.log(meetingActive);
    const meetingsFiltered = meetingdb.filter((meeting) => {
      console.log(meetingActiveId === "all");
      if (meetingActiveId == "all" || meeting.typeId == meetingActiveId) {
        return meeting;
      }
    });
    setMeetingDatabase(meetingsFiltered);

    console.log(meetingsFiltered);
    /*-------meetingsSelectedByType-------*/
  }, [meetingSelectedIndex]);

  return (
    <MeetingsSection>
      <nav className="meetingsNav">
        <button
          id="all"
          className="meetingsButton"
          onClick={() => {
            selectMeeting("all");
          }}
        >
          All
        </button>
        {meetingTypeArray.map((meeting) => {
          return (
            <button
              id={meeting.name}
              onClick={() => {
                selectMeeting(meeting.name);
              }}
              className="meetingsButton"
              key={meeting.name}
            >
              {meeting.name}
            </button>
          );
        })}
      </nav>
      <section className="meetingList">
        {meetingDatabase == null ? (
          <p>Loading...</p>
        ) : (
          meetingDatabase.map((meeting) => {
            return <MeetingCards meeting={meeting} />;
          })
        )}
      </section>
    </MeetingsSection>
  );
};

const MeetingsSection = styled.main`
  height: 100%;
  width: 100%;
  background-color: var(--color-off-white2);
  padding: 16rem 8rem;

  .meetingsNav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;

    & .meetingsButton {
      margin: 0rem 2.2rem;
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-gray);
      background-color: transparent;

      &:hover {
        color: var(--color-green);
      }

      &.active {
        color: var(--color-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
      }
    }
  }

  .meetingList {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default Meetings;
