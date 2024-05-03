import React, { useState } from "react";
import SocailLogin from "./SocailLogin";
const Signup = ({ changeLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
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
      const response = await fetch("http://127.0.0.1:5000/signup", {
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
      console.log(data);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");

  // const handleSignup = async () => {};

  return (
    <div className="">
      <form
        onSubmit={onSubmitHandler}
        className="form signup-container"
        autoComplete="off"
      >
        <h2>Signup</h2>
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
          placeholder="Create password"
          value={formData.password}
          onChange={onChangeHandler}
          name="password"
          required="required"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={onChangeHandler}
          name="confirmPassword"
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
        <button type="submit">Signup</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => changeLogin(true)}>Login</span>
        </p>
        <SocailLogin />
      </form>
    </div>
  );
};

export default Signup;
