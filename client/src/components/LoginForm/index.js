import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 10px;
  justify-content: space-evenly;
  border-radius: 5px;
  height: 300px;
  width: 400px;
  font-family: "Palanquin", sans-serif;
`;

const LoginForm = () => {
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

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          className="sign-input"
          placeholder="Username here"
          type="username"
          name="username"
          id="username"
          value={formState.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="pwd">Password: </label>
        <input
          className="sign-input"
          placeholder="Password here"
          type="password"
          name="password"
          id="pwd"
          value={formState.password}
          onChange={handleChange}
        ></input>
      </div>
      <button className="sign-btn">Sign In</button>
    </Form>
  );
};

export default LoginForm;