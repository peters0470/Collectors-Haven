import React from "react";
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';

import image from '../assets/vector-images/broken-link.png';

const SignFormsHandler = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  margin-bottom: 100px;
`;

const SignUp = () => {
  return (
    <SignFormsHandler>
      <img className="login-img" src={image} alt="vector illustration"></img>
      <div className="login-form-handler">
        <h2 className="sign-title">Log In</h2>
        <SignUpForm />
      </div>
    </SignFormsHandler>
  );
};

export default SignUp;
