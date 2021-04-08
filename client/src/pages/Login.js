import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import image from '../assets/vector-images/Coming-Soon.png'

import LoginForm from "../components/LoginForm";

const Login = (props) => {
  const SignFormsHandler = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
  `;


  return (
    <SignFormsHandler>
      <img className='login-img' src={image} alt='vector illustration'></img>
      <div className='login-form-handler'>
        <h2 className='sign-title'>Log In</h2>
        <LoginForm />
        <p style={{ fontFamily:'Quicksand' }}>Don't have an Account?<Link className='link-signup' to='/signup'> Sign up</Link></p>
      </div>
    </SignFormsHandler>
  );
};

export default Login;
