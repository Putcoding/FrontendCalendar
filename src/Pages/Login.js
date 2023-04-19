import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import AuthContext from "../store/auth";

function Login() {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  if (isLoggedIn) {
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
      <button className="loginButton" onClick={context.onLogin}>
        Login
      </button>
      <p>
        Not registered? Then <Link to="/calendar">register here</Link>
      </p>
      <p></p>
      <p></p>
      <button className="googleButton" onClick={context.onLogin}>
        Sign in with Google
      </button>
    </form>
  );
}

export default Login;
