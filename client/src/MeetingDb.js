import chillingImg from "./assets/pexels-zsolt-joo.jpg";
import cruisingImg from "./assets/taneli-lahtinen-unsplash.jpg";
import racingImg from "./assets/pixabay-porsche.jpg";
import socialImg from "./assets/pexels-piccinng.jpg";

const meetingdb = [
  {
    id: 167,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "02/10/2023, 21h00,",
    profileId: "Leonardo D",
  },
  {
    id: 101,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "30/10/2023, 21h00,",
    profileId: "Leonardo D",
  },
  {
    id: 100,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "30/11/2023, 21h00,",
    profileId: "Fredrick",
  },
  {
    id: 64,
    typeId: "Chilling",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: () => {
      const tomorrow = new Date();
      tomorrow.setDay(tomorrow.getDay() + 1);
      tomorrow.setHours(21);
      return tomorrow.toLocaleDateString();
    },
    profileId: "Darino",
  },
  {
    id: 65,
    typeId: "Crusing",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: () => {
      const tomorrow = new Date();
      tomorrow.setDay(tomorrow.getDay() + 1);
      tomorrow.setHours(21);
      return tomorrow.toLocaleDateString();
    },
    profileId: "Darino",
  },
  {
    id: 66,
    typeId: "Socialize",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: () => {
      const tomorrow = new Date();
      tomorrow.setDay(tomorrow.getDay() + 1);
      tomorrow.setHours(21);
      return tomorrow.toLocaleDateString();
    },
    profileId: "Darino",
  },
  {
    id: 67,
    typeId: "Not Racing",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: () => {
      const tomorrow = new Date();
      tomorrow.setDay(tomorrow.getDay() + 1);
      tomorrow.setHours(21);
      return tomorrow.toLocaleDateString();
    },
    profileId: "Darino",
  },
  {
    id: 144,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "02/14/2023, 21h00,",
    profileId: "Poplio",
  },
  {
    id: 139,
    typeId: "Not Racing",
    address: "390 Rue Jean-Talon O, Montréal, QC H4P 1W9",
    time: "25/02/2023, 21h00,",
    profileId: "Poplio",
  },
  {
    id: 141,
    typeId: "Not Racing",
    address: "2520 Rue Marie-Anne, Montréal, QC H2H 1N7",
    time: "08/10/2023, 21h00,",
    profileId: "Poplio",
  },
  {
    id: 137,
    typeId: "Not Racing",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "25/10/2023, 21h00,",
    profileId: "Fredrick",
  },
  {
    id: 128,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "02/10/2023, 21h00,",
    profileId: "Leonardo D",
  },
  {
    id: 108,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "24/14/2023, 21h00,",
    profileId: "Poplio",
  },
  {
    id: 107,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "23/14/2023, 21h00,",
    profileId: "Leonardo D",
  },
  {
    id: 106,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "22/14/2023, 21h00,",
    profileId: "Poplio",
  },

  {
    id: 3,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "25/10/2023, 21h00,",
    profileId: "David",
  },
  {
    id: 2,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "29/10/2023, 21h00,",
    profileId: "David",
  },
  {
    id: 1,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "25/11/2023, 21h00,",
    profileId: "David",
  },
];

export default meetingdb;
