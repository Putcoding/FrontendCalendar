import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth";
import PlannerGrid from "../Components/PlannerGrid";

function Calendar() {
  const context = useContext(AuthContext);

  if (!context.isLoggedIn || localStorage.getItem("login_key") === 0) {
    return <Navigate to="/" />;
  }

  return (
    <section>
      <PlannerGrid></PlannerGrid>
    </section>
  );
}

export default Calendar;
