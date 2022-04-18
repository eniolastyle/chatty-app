import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "95aabce8-1945-4b00-99ff-f54c9cfffabd",
      "User-Name": values.username,
      "User-Secret": values.password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);

      window.location.reload();
    } catch (error) {
      setError("Oops, Sorry Incorrect Credentials...");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chatty Messaging App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button className="button" type="submit">
              <span>Start Chatty</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
