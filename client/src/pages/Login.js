import React from "react";
import styled from "styled-components";

import LoginForm from "../components/Login-Signup/LoginForm";
import SignUpForm from "../components/Login-Signup/SignUpForm";

const Login = (props) => {
  const SignFormsHandler = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
  `;
  const FormHandler = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: center;
  `;
  const PageSplit = styled.div`
    height: 100%;
    width: 10px;
    border-right: 1px solid #ff717100;
    border-left: 1px solid #ff717100;
    background-color: #ff7171;
  `;

  return (
    <SignFormsHandler>

      <FormHandler>
        <h2 className='sign-title'>Sign Up</h2>
        <SignUpForm />
      </FormHandler>

      <PageSplit></PageSplit>

      <FormHandler>
        <h2 className='sign-title'>Log In</h2>
        <LoginForm />
      </FormHandler>

    </SignFormsHandler>
  );
};

export default Login;
