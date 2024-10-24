import { useState } from "react";

import Form from "../components/Form";

export default function Signin({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setError("");

    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/signin", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((apiResponse) => apiResponse.json())
      .then((res) => {
        // if a token is not returned
        // the user credentials are not valid
        // hence throw an error
        if (!res.token) throw new Error("Invalid credentials");
        localStorage.setItem("token", res.token);
        setLoggedIn(true);

        // reset inputs
        setUsername("");
        setPassword("");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }

  return (
    <>
      <div className="text">
        <h1>Login</h1>
      </div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} username={username} password={password} />
      {error && <div className="error-container">{error}</div>}
    </>
  );
}
