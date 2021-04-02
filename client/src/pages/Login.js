import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='signInForm-handler'>
      <form>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            placeholder="Username here"
            type="username"
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor='pwd'>Password: </label>
          <input
            placeholder="Password here"
            type="password"
            name="password"
            id="pwd"
          ></input>
        </div>
        <button className='signIn-btn'>Sign In</button>
        <Link to="signUp">Sign-Up Here</Link>
      </form>
    </div>
  );
};

export default Login;
