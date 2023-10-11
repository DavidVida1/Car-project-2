const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDay() + 1);
  tomorrow.setHours(21);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  return tomorrow.toLocaleString();
};

const meetingdb = [
  {
    id: 167,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "10/02/2023, 21:00:00",
    profileId: "Leonardo D",
  },
  {
    id: 101,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "10/30/2023, 21:00:00",
    profileId: "Leonardo D",
  },
  {
    id: 100,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "11/30/2023, 21:00:00,",
    profileId: "Fredrick",
  },
  {
    id: 64,
    typeId: "Chilling",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: getTomorrow(),
    profileId: "Darino",
  },
  {
    id: 65,
    typeId: "Cruising",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: getTomorrow(),
    profileId: "Darino",
  },
  {
    id: 66,
    typeId: "Socialize",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: getTomorrow(),
    profileId: "Darino",
  },
  {
    id: 67,
    typeId: "Not Racing",
    address: "8383 Bd Saint-Michel, Montréal, QC H1Z 3E7",
    time: getTomorrow(),
    profileId: "Darino",
  },
  {
    id: 144,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "02/14/2023, 21:00:00",
    profileId: "Poplio",
  },
  {
    id: 139,
    typeId: "Not Racing",
    address: "390 Rue Jean-Talon O, Montréal, QC H4P 1W9",
    time: "02/14/2023, 21:00:00",
    profileId: "Poplio",
  },
  {
    id: 141,
    typeId: "Not Racing",
    address: "2520 Rue Marie-Anne, Montréal, QC H2H 1N7",
    time: "10/08/2023, 21:00:00",
    profileId: "Poplio",
  },
  {
    id: 137,
    typeId: "Not Racing",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "10/25/2023, 21:00:00",
    profileId: "Fredrick",
  },
  {
    id: 128,
    typeId: "Chilling",
    address: "4920 Rue Beaubien E, Montréal, QC H1T 1V2",
    time: "10/02/2023, 21:00:00",
    profileId: "Leonardo D",
  },
  {
    id: 108,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "10/24/2023, 21:00:00",
    profileId: "Poplio",
  },
  {
    id: 107,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "12/24/2023, 21:00:00",
    profileId: "Leonardo D",
  },
  {
    id: 106,
    typeId: "Cruising",
    address: "2005 Boul Crémazie E, Montréal, QC H1Z 4N4",
    time: "11/14/2023, 21:00:00",
    profileId: "Poplio",
  },

  {
    id: 3,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "10/25/2023, 21:00:00",
    profileId: "David",
  },
  {
    id: 2,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "10/29/2023, 21:00:00",
    profileId: "David",
  },
  {
    id: 1,
    typeId: "Socialize",
    address: "3440 Boul. Saint-Laurent, Montréal, QC H2X 2T9",
    time: "11/25/2023, 21:00:00",
    profileId: "David",
  },
];

export default meetingdb;
