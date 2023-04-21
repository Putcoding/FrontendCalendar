import { useEffect } from "react";
import classes from "./PlannerItem.module.css";

const PlannerItem = (props) => {
  const currentDate = props.currentDate;
  const dayOffset = props.offset;
  let componentDate = new Date();
  componentDate.setDate(currentDate.getDate() + dayOffset);
  console.log(componentDate);

  return (
    <div className={classes["planner-item"]}>
      <h2>{props.day}</h2>
    </div>
  );
};

export default PlannerItem;
