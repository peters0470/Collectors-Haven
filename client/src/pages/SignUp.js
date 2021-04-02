import React from "react";

const SignUp = () => {
  return (
    <div className="signForm-handler">
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            placeholder="Username here"
            type="username"
            name="username"
            id="signUp-username"
          ></input>
        </div>
        <div>
          <label htmlfor="password">Password: </label>
          <input
            placeholder="Password here"
            type="password"
            name="password"
            id="signUp-pwd"
          ></input>
        </div>
        <button className='sign-btn'>Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
