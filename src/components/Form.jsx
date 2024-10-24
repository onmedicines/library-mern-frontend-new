import { useState } from "react";

export default function Form({ username, password, handleChange, handleSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  function handlePasswordVisiblity() {
    setIsVisible(!isVisible);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input type="text" name="username" onChange={handleChange} value={username} />
      </label>
      <label>
        <span>Password</span>
        <div>
          <input type={isVisible ? "text" : "password"} name="password" onChange={handleChange} value={password} />
          <button type="button" onClick={handlePasswordVisiblity}>
            eye
          </button>
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
