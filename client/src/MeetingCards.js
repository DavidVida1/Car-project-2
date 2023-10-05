import styled from "styled-components";
import React, { useEffect, useState } from "react";

const MeetingCards = ({ meeting }) => {
  return (
    <CardsSection>
      <p> {meeting.profileId}</p>
    </CardsSection>
  );
};

const CardsSection = styled.section`
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
export default MeetingCards;
