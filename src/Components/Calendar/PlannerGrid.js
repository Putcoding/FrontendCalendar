import { useContext } from "react";
import PlannerItem from "./PlannerItem";
import classes from "./Styles/PlannerGrid.module.css";
import DateContext from "../../store/date";

const PlannerGrid = () => {
  const dateContext = useContext(DateContext);
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

  let lastDate = new Date(currentDate);
  lastDate.setDate(currentDate.getDate() + 5);

  let nextSevenDays = [];
  let dayOffset = 0;

  for (let i = currentDay; i <= currentDay + 4; i++) {
    let dayIndex = i % 5;
    let dayName = daysOfTheWeek[dayIndex];
    nextSevenDays.push({ dayName, dayOffset });
    dayOffset++;
  }

  return (
    <>
      <h2 className={classes.dates}>
        {" "}
        <span onClick={dateContext.onDateBackward} className={classes["change-date"]}>-5 days </span>
        {currentDate.toLocaleDateString("pl-PL") +
          " - " +
          lastDate.toLocaleDateString("pl-PL")}
        <span onClick={dateContext.onDateForward} className={classes["change-date"]}> +5 days</span>
      </h2>
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
    </>
  );
};

export default PlannerGrid;
