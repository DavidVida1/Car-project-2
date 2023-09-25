import styled from "styled-components";
import chilling from "./assets/Chilling.mp4";
import cruising from "./assets/Cruising.mp4";
import racing from "./assets/Racing.mp4";
import social from "./assets/Social.mp4";

const MeetingDescription = () => {
  const meetingTypeArray = [
    {
      id: 1,
      name: "Chilling",
      description:
        "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
      video: chilling,
    },
    {
      id: 2,
      name: "Cruising",
      description:
        "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun. Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun. Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun. Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun",
      video: cruising,
    },
    {
      id: 3,
      name: "Socialize",
      description:
        "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
      video: racing,
    },
    {
      id: 4,
      name: "Not Racing",
      description:
        "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
      video: social,
    },
  ];
  return (
    <MeetingDescriptionContainer>
      <nav className="leftSection">
        <ul>
          <header>
            <h3>
              Meeting Type <img src="./assets/svg/carGo.svg" alt="carGo img" />
            </h3>
          </header>
          {meetingTypeArray.map((meeting, index) => {
            return (
              <li>
                <button className="meetingsButton" key={index}>
                  {meeting.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="rightSection">
        <h2> {meetingTypeArray[1].name}</h2>
        <p> {meetingTypeArray[1].description}</p>
        <button className="joinButton">Explore Meetings</button>
        <aside className="meetingTypeVideo">
          <video
            src={meetingTypeArray[1].video}
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

const MeetingDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-off-white);
  padding: 3rem var(--meetingType-padding);
  box-shadow: 0 0 2px var(--color-green);

  .leftSection {
    justify-self: center;
    align-self: center;
    box-shadow: 25px 0 20px -20px rgba(0, 0, 0, 0.45);
    padding: 20px;
    border-radius: 8px;
    height: 100%;
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

      h3 {
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
      color: var(--color-gray);
      padding: 16px 8px;

      width: 100%;
      border-radius: 8px;
      text-align: left;
      box-shadow: inset 0 0 0px var(--color-green);
      background-color: #fafafa;

      &:hover {
        color: var(--color-black);
        text-indent: 10px;
        box-shadow: 0 0 4px var(--color-green);
        transition: color 0.5s ease-in-out, all 1s linear;
      }
    }
  }

  .rightSection {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    gap: 5px;

    .joinButton {
      border: 1px solid var(--color-green);
      border-radius: 15px;
      color: var(--color-white);
      background-color: var(--color-green);
      font-weight: bold;
      padding: 8px 4px;
      width: 150px;
      margin-bottom: 24px;

      &:hover {
        color: var(--color-yellow);
      }
    }
    p {
      padding: 12px 12px 12px 0px;
      color: var(--color-green);
      font-size: 1.5rem;
    }
    h2 {
      font-size: 5.5rem;
      font-weight: 600;
    }

    .meetingTypeVideo {
      display: block;
      aspect-ratio: 16 / 9;
      height: 450px;
      width: 800px;

      video {
        height: 100%;
        border-radius: 10px;
      }
    }
  }
`;
export default MeetingDescription;
