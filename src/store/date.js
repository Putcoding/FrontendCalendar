import React, { useState } from "react";

const DateContext = React.createContext({
  date: null,
  onDateForward: () => {},
  onDateBackward: () => {},
});

export const DateContextProvider = (props) => {
  const [date, setDate] = useState(new Date());

  const dateForwardHandler = () => {};
  const onDateBackwardHandler = () => {};

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
