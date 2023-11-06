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
      "Explore the coolest car gatherings that send shivers down your spine as horsepower and adrenaline unite",
    video: chilling,
  },
  {
    id: 2,
    name: "Cruising",
    heroImg: cruisingImg,
    text: "Cruise",
    description:
      "Embark on a journey of pure automotive bliss with our cruising events, where the open road becomes your playground.",
    video: cruising,
  },
  {
    id: 3,
    name: "Socialize",
    heroImg: socializeImg,
    text: "Connect",
    description:
      "Connect with fellow car enthusiasts, share your passion, and build lasting relationships at our socialize events for automotive aficionados.",
    video: social,
  },
  {
    id: 4,
    name: "Not Racing",
    heroImg: racingImg,
    text: "Compete",
    description:
      "Experience the thrill of high-speed competition and push your limits at our racing events, where horsepower and adrenaline take center stage",
    video: racing,
  },
];

export default meetingTypeArray;
