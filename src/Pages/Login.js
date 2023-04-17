import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function Login() {
  const [goToCalendar, setGoToCalendar] = useState(false);

  const loginHandler = () => {
    setGoToCalendar(true);
  };

  if (goToCalendar) {
    localStorage.setItem("login_key", 1);
    return <Navigate to="/calendar" />;
  }
  return (
      <form>
        <header>
          <h1>Student's Calendar</h1>
          <Link>
            <button className="aboutButton">about</button>
          </Link>
        </header>
        <p>username:</p>
        <input type="text" placeholder="username" />
        <p>password:</p>
        <input type="password" placeholder="password" />
        <p></p>
        <button className="loginButton" onClick={loginHandler}>
          Login
        </button>
        <p>
          Not registered? Then <Link to="/calendar">register here</Link>
        </p>
        <p></p>
        <p></p>
        <button className="googleButton" onClick={loginHandler}>
          Sign in with Google
        </button>
      </form>
  );
}

export default Login;
