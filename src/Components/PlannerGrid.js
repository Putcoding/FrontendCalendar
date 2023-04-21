import PlannerItem from "./PlannerItem";
import classes from "./PlannerGrid.module.css";

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
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const addDays = (currentDate, days) => {
    let result = currentDate;
    result.setDate(result.getDate() + days);
    return result;
  };

  let nextSevenDays = [];
  let dayOffset = 0;

  for (let i = currentDay; i <= currentDay + 6; i++) {
    let dayIndex = i % 7;
    let dayName = daysOfTheWeek[dayIndex];
    nextSevenDays.push({ dayName, dayOffset });
    dayOffset++;
  }

  return (
    <ol className={classes["planner-grid"]}>
      {nextSevenDays.map((day) => (
        <PlannerItem
          day={day.dayName}
          offset={day.dayOffset}
          currentDate={currentDate}
          key={Math.random()}
        />
      ))}
    </ol>
  );
};

export default PlannerGrid;
