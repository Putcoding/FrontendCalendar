import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth";

const Navigation = () => {

  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  return (
    <nav>
      <ul>
        {!isLoggedIn && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/calendar">My Calendar</NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
