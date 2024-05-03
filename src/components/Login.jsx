import React, { useState } from "react";
import SocailLogin from "./SocailLogin";
const Login = ({ changeLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      const data = await response.json();
      if (data) {
        if (data.message) {
          setSuccessMessage(data.message);
          setErrorMessage("");
        }
        if (data.error) {
          setErrorMessage(data.error);
          setSuccessMessage("");
        }
      }

      console.log(data.message);
      console.log(data.error);
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage ? (
        <p className="" id="error-message">
          {errorMessage}
        </p>
      ) : (
        <></>
      )}
      {sucessMessage ? (
        <p className="" id="success-message">
          {sucessMessage}
        </p>
      ) : (
        <></>
      )}
      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?{" "}
        <span onClick={() => changeLogin(false)}>Signup</span>
      </p>

      <SocailLogin />
    </div>
  );
};

export default Login;
