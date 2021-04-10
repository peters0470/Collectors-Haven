import React, { useState } from 'react';
import {Form, Button, Alert } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';




const LoginForm = () => {
  let history = useHistory();
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [loginUser,{ loading }]=useMutation(LOGIN_USER,{
    update(proxy, result){
      console.log(result);
      
      console.log('login sucess')
      
    },
    onError(err){
     setShowAlert(true)
    },
    variables: userFormData
  });



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
   
    
    try {
      const { data } = await loginUser({
        variables: { ...userFormData}
      });

        Auth.login(data.login.token);
        history.push('/');
      

      
    }  catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    
    
  };

  return (
    <>

      <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='outline-success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
