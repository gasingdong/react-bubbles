import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="login-form">
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" placeholder="JohnDoe" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" name="password" placeholder="123456" />
        </label>
      </form>
    </div>
  );
};

export default Login;
