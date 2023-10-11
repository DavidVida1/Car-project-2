import { useEffect, useState } from "react";
import styled from "styled-components";
import meetingTypeArray from "./MeetingTypeArray";
import meetingdb from "./MeetingDb";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import MeetingCards from "./MeetingCards";
import AOS from "aos";
import "aos/dist/aos.css";

const Meetings = () => {
  const navigate = useNavigate();
  const [meetingSelectedIndex, setMeetingSelected] = useState(() => {
    return 0;
  });
  const [meetingDatabase, setMeetingDatabase] = useState(null);
  const { name } = useParams();

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

    const meetingsFiltered = meetingdb.filter((meeting) => {
      if (meetingActiveId == "all" || meeting.typeId == meetingActiveId) {
        return meeting;
      }
    });
    setMeetingDatabase(null);
    setTimeout(() => {
      setMeetingDatabase(meetingsFiltered);
    }, 500);

    /*-------meetingsSelectedByType-------*/
  }, [meetingSelectedIndex]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true,
    });
  }, []);

  useEffect(() => {
    selectMeeting(decodeURI(name));
  }, [name]);

  return (
    <MeetingsSection>
      <nav className="meetingsNav" data-aos="fade-up" data-aos-delay="100">
        <NavLink id="all" className="meetingsButton" to={`/meetings/all`}>
          All
        </NavLink>
        {meetingTypeArray.map((meeting) => {
          return (
            <NavLink
              id={meeting.name}
              to={`/meetings/${meeting.name}`}
              className="meetingsButton"
              key={meeting.name}
            >
              {meeting.name}
            </NavLink>
          );
        })}
      </nav>
      <section className="meetingList">
        {meetingDatabase == null ? (
          <article className="loading">Loading...</article>
        ) : (
          <section data-aos="fade-up" data-aos-delay="100">
            {meetingDatabase.map((meeting) => {
              return (
                <MeetingCards
                  meeting={meeting}
                  meetingTypeSelected={meetingTypeArray.find((t) => {
                    return t.name == meeting.typeId;
                  })}
                />
              );
            })}
          </section>
        )}
      </section>
    </MeetingsSection>
  );
};

const MeetingsSection = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-off-white2);
  padding: 16rem 8rem;
  display: grid;
  grid-template-rows: 75px auto;

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
    position: relative;
    width: 100%;
    height: 100%;

    & > section {
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 75px;
      margin-top: 12rem;
    }

    .loading {
      display: grid;
      width: 100%;
      height: 100%;
      place-items: center;
      font-size: 3rem;
      color: var(--color-yellow);
      text-shadow: 0px 0px 4px var(--color-gray);
    }
  }
`;

export default Meetings;
