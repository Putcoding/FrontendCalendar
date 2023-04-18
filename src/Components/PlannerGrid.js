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
  const today = new Date().getDay();
  let nextSevenDays = [];
  let begin = 0;

  for (let i = 0; i < 7; i++) {
    if (today + i > 7) {
      for (let k = i-1; k < 7; k++) {
        console.log("It i: " + i);
        console.log("It k: " + k);
        console.log("Value of begin: " + begin)
        nextSevenDays[k] = daysOfTheWeek[begin];
        begin++;
      }
    } else {
      console.log("It i: " + i);
      nextSevenDays[i] = daysOfTheWeek[today + i];
    }
  }

  console.log(nextSevenDays);

  return <ol>
    {nextSevenDays.map(day => <PlannerItem day={day} />)}
  </ol>;
};

export default PlannerGrid;
