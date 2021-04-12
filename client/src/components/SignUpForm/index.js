import React, { useState } from 'react';
import styled from "styled-components";
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";


const SignupForm = () => {
  let history = useHistory();
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

 const [errors, setErrors]=useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [createUser,{ loading }]=useMutation(ADD_USER,{
    update(proxy, result){
      console.log(result);
    },
    onError(err){
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: userFormData
  });

  
  const handleFormSubmit = async event => {
    event.preventDefault();
  
   
    try {
     
      const { data } = await createUser({
        variables: { ...userFormData }
      });
      Auth.login(data.addUser.token);
      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit} className={loading ? 'loading': ''}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
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
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      
    </>
  );
};

export default SignupForm;