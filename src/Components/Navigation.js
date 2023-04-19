import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;

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
        {isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
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
      </ul>
    </nav>
  );
};

export default Navigation;
