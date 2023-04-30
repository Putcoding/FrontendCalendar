import React, { useState } from "react";

const DateContext = React.createContext({
  date: null,
  onDateForward: () => {},
  onDateBackward: () => {},
});

export const DateContextProvider = (props) => {
  const [date, setTheDate] = useState(new Date());

  const dateForwardHandler = () => {
    let dateToUpdate = new Date(date)
    dateToUpdate.setDate(date.getDate() + 5);
    return setTheDate(dateToUpdate)
  };
  const onDateBackwardHandler = () => {
    let dateToUpdate = new Date(date)
    dateToUpdate.setDate(date.getDate() - 5);
    return setTheDate(dateToUpdate)
  };

  return (
    <DateContext.Provider
      value={{
        date: date,
        onDateForward: dateForwardHandler,
        onDateBackward: onDateBackwardHandler,
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
