import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
