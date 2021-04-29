import { NavLink } from "react-router-dom";
const Navigation = (props) => {
  return (
    <header>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/etc">
            etc
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/etc2">
            etc2
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/etc3">
            etc3
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;