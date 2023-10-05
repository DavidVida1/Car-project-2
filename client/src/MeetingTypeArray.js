import chilling from "./assets/Chilling.mp4";
import cruising from "./assets/Cruising.mp4";
import racing from "./assets/Racing.mp4";
import social from "./assets/Social.mp4";

import chillingImg from "./assets/pexels-zsolt-joo.jpg";
import cruisingImg from "./assets/taneli-lahtinen-unsplash.jpg";
import socializeImg from "./assets/pexels-piccinng.jpg";
import racingImg from "./assets/pixabay-porsche.jpg";

const meetingTypeArray = [
  {
    id: 1,
    name: "Chilling",
    heroImg: chillingImg,
    text: "Memories",
    description:
      "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
    video: chilling,
  },
  {
    id: 2,
    name: "Cruising",
    heroImg: cruisingImg,
    text: "Cruise",
    description:
      "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
    video: cruising,
  },
  {
    id: 3,
    name: "Socialize",
    heroImg: socializeImg,
    text: "Connect",
    description:
      "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
    video: social,
  },
  {
    id: 4,
    name: "Not Racing",
    heroImg: racingImg,
    text: "Compete",
    description:
      "Discover a website that brings car enthusiasts together to enjoy exhilarating car meets solely for the joy of having fun.",
    video: racing,
  },
];

export default meetingTypeArray;
