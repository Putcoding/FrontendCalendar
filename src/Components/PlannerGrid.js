import PlannerItem from "./PlannerItem";

const PlannerGrid = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date("04.20.2023");
  const currentDay = currentDate.getDay();
  let nextSevenDays = [];

  for (let i = currentDay; i <= currentDay + 6; i++) {
    let dayIndex = i % 7;
    let dayName = daysOfTheWeek[dayIndex];
    nextSevenDays.push(dayName);
  }

  return (
    <ol>
      {nextSevenDays.map((day) => (
        <PlannerItem day={day} key={Math.random()} />
      ))}
    </ol>
  );
};

export default PlannerGrid;
