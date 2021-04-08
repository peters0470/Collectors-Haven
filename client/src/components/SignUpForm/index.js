import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 10px;
  height: 200px;
  width: 400px;
  font-family: "Palanquin", sans-serif;
`;

const SigninForm = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });

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
    <Form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          className='sign-input'
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
          className='sign-input'
          placeholder="Password here"
          type="password"
          name="password"
          id="signUp-pwd"
          value={formState.password}
          onChange={handleChange}
        ></input>
      </div>
      <button className="sign-btn">Sign Up!</button>
    </Form>
  );
};

export default SigninForm;
