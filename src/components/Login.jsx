import React, { useState } from "react";
import SocailLogin from "./SocailLogin";
const Login = ({ changeLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  // const [message, setMessage] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        console.log(key);
        // setMessage(`please fill ${key} field`);
        return;
      } else {
        // setMessage(`Form Submited Successfully`);
      }
    }
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
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
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="">
      <form
        onSubmit={onSubmitHandler}
        className="form login-container"
        autoComplete="off"
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={onChangeHandler}
          name="username"
          required="required"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChangeHandler}
          name="password"
          required="required"
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
        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => changeLogin(false)}>Signup</span>
        </p>

        <SocailLogin />
      </form>
    </div>
  );
};

export default Login;
