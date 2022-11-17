import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth.context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const { token } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDq86oI0za8ORbMctd2T9yzACwGfbi2_vQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("변경성공!");
          history.replace("/");
        } else {
          return res.json().then((data) => {
            let errorMessage = "변경 실패";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          minLength={"7"}
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
