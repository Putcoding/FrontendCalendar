import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth";

import classes from "./Navigation.module.css";
import DateContext from "../store/date";

const Navigation = () => {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

  const date  = useContext(DateContext);
  console.log(date.date)

  return (
    <nav className={classes["nav-bar"]}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/calendar"
          >
            My Calendar
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <button className={classes["logout-button"]} onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
