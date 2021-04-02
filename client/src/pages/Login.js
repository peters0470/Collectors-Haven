import React, {useState} from "react";
import { Link } from "react-router-dom";


const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });

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
      username: '',
      password: '',
    });
  };



const Login = () => {
  return (
    <div className='signForm-handler'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            placeholder="Username here"
            type="username"
            name="username"
            id="username"
            value={formState.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='pwd'>Password: </label>
          <input
            placeholder="Password here"
            type="password"
            name="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          ></input>
        </div>
        <button className='sign-btn'>Sign In</button>
        <Link to="signUp">Sign-Up Here</Link>
      </form>
    </div>
  );
};
}

export default Login;
