import { useContext } from "react";
import PlannerItem from "./PlannerItem";
import classes from "./Styles/PlannerGrid.module.css";
import DateContext from "../../store/date";

const PlannerGrid = () => {
 const dateContext = useContext(DateContext)
 const currentDate = dateContext.date;

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = currentDate.getDay();

  let nextSevenDays = [];
  let dayOffset = 0;

  for (let i = currentDay; i <= currentDay + 4; i++) {
    let dayIndex = i % 5;
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
