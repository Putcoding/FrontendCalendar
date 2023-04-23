import { useEffect, useState } from "react";
import classes from "./PlannerItem.module.css";
import axios from "axios";

const PlannerItem = (props) => {
  const [componentData, setComponentData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/todoos/user:1")
      .then((res) => setComponentData(res.data));
  }, []);
  console.log(componentData)

  const currentDate = props.currentDate;
  const dayOffset = props.offset;

  let componentDate = new Date();
  componentDate.setDate(currentDate.getDate() + dayOffset);

  return (
    <div className={classes["planner-item"]}>
      <h2>{props.day}</h2>
      <p>({componentDate.toDateString()})</p>
     {componentData && componentData.map(piece => <p>{piece.text}</p>)}
    </div>
  );
};

export default PlannerItem;
