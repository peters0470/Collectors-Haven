import React, { useState } from "react";

const SignUp = () => {
  const [formState, setFormState] = useState({ username: '',  password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="signForm-handler">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            placeholder="Username here"
            type="username"
            name="username"
            id="signUp-username"
            value={formState.username}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlfor="password">Password: </label>
          <input
            placeholder="Password here"
            type="password"
            name="password"
            id="signUp-pwd"
            value={formState.password}
            onChange={handleChange}
          ></input>
        </div>
        <button className='sign-btn'>Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
