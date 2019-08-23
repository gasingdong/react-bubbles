import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({});

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username: user.username,
        password: user.password,
      })
      localStorage.setItem('userToken', response.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-form">
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" placeholder="JohnDoe" onChange={changeHandler} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" name="password" placeholder="123456" onChange={changeHandler} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
