import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth.context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const history = useHistory();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const logoutHanler = () => {
    logout();
    alert("로그아웃 되었습니다.");
    history.replace("/");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          <li>
            {isLoggedIn && <button onClick={logoutHanler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
