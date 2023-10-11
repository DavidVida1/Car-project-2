import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetingCards = ({ meeting, meetingTypeSelected }) => {
  return (
    <CardsSection>
      <section className="cardImg">
        <img src={meetingTypeSelected.heroImg} />
      </section>

      <section className="meetingInfoSection">
        <h4 className="meetingTitle">{meeting.typeId}</h4>
        <aside className="meetingCreator">
          <span className="infoIcon" title="More Info">
            <AiOutlineArrowDown />
          </span>
          <p>Created By: {meeting.profileId}</p>
        </aside>
        <aside className="meetingInfo">
          <p className="meetingAddress">{meeting.address}</p>{" "}
          <p className="meetingTime">{meeting.time}</p>
        </aside>
      </section>
    </CardsSection>
  );
};

const CardsSection = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  grid-template-rows: 250px auto;
  border-radius: 15px;
  width: 350px;
  height: 360px;
  transition: 1s ease-in-out;
  padding: 15px;

  /*box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;*/
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    transform: translateY(10px);
    height: 450px;
    transition: all 1s ease-in-out;

    & .infoIcon {
      opacity: 0;
    }
  }

  & .cardImg {
    position: relative;
    width: 90%;
    height: auto;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

    & img {
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }
  }

  & .cardImg:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 15px;
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

  &:hover .cardImg:after {
    opacity: 1;
  }

  .meetingInfoSection {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    width: 100%;
    gap: 10px;
    overflow: hidden;
    padding: 7px;
    /*box-shadow: 0 0 0 1px black;*/

    .meetingTitle {
      font-size: 2.5rem;
      color: var(--color-green);
      font-weight: 800;
      margin: 5px 0px 10px 0px;
    }

    .meetingCreator {
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      color: var(--color-dark-green);
      color: gray;
      text-align: right;
      padding: 0 5px 5px 5px;
      box-shadow: 0 -20px 10px -20px rgba(0, 0, 0, 0.45) inset;
      border-radius: 8px;

      & .infoIcon {
        display: block;
        color: var(--color-yellow);
        font-size: 2rem;
        visibility: visible;
        transition: 1s ease-in-out;
      }
    }

    .meetingInfo {
      display: grid;
      gap: 5px;
      grid-template-columns: 65% 35%;
      .meetingAddress {
        /*border: 1px solid var(--color-yellow);*/
        border-radius: 10px;
        color: white;
        background-color: var(--color-yellow);
        padding: 5px 10px;
        box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.5);

        &:hover {
          color: var(--color-green);
          text-decoration: underline;
        }
      }

      .meetingTime {
        border: 1px solid var(--color-green);
        border-radius: 10px;
        color: white;
        background-color: var(--color-green);
        padding: 5px 10px;
        box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
export default MeetingCards;
