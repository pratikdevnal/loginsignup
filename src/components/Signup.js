import React, { useState } from "react";
import SocailLogin from "./SocailLogin";
const Signup = ({ changeLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  const handleSignup = async () => {
    if (!username || !password) {
      setErrorMessage("Fill all required fields");
    }
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
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
      console.log(data);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="password" placeholder="Confirm password" />
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
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account?{" "}
        <span onClick={() => changeLogin(true)}>Login</span>
      </p>
      <SocailLogin />
    </div>
  );
};

export default Signup;
