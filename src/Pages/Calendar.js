import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth";

function Calendar() {
  const context = useContext(AuthContext);

  if (!context.isLoggedIn || localStorage.getItem("login_key") === 0) {
    window.localStorage.setItem("login_key", 0);
    return <Navigate to="/" />;
  }

  return (
    <form className="Calendar">
      <p>you are logged in!</p>
      <button
        className="loginButton"
        onClick={context.logoutHandler}
      >
        logout
      </button>
    </form>
  );
}

export default Calendar;
