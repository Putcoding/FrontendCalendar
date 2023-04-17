import { NavLink } from "react-router-dom";

const Navigation = () => {
    const isLoggedIn = true;
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
