import { useState } from "react";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [activeNavlink, setActiveNavlink] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleNavlinkChange(e) {
    const { id } = e.target;
    if (id === "home") {
      setActiveNavlink("home");
    } else if (id === "signin") {
      setActiveNavlink("signin");
    } else if (id === "signup") {
      setActiveNavlink("signup");
    } else if (id === "logout") {
      setLoggedIn(false);
      setActiveNavlink("home");
    }
  }

  function render() {
    switch (activeNavlink) {
      case "home":
        return <Home />;
      case "signin":
        return <Signin setLoggedIn={setLoggedIn} />;
      case "signup":
        return <Signup setLoggedIn={setLoggedIn} />;
      default:
        return <Error />;
    }
  }

  return (
    <>
      <header id="header">
        <nav onClick={handleNavlinkChange}>
          <h1>Library</h1>
          {!loggedIn ? (
            <ul>
              <li id="home" className={activeNavlink === "home" ? "active" : "unactive"}>
                Home
              </li>
              <li id="signin" className={activeNavlink === "signin" ? "active" : "unactive"}>
                Login
              </li>
              <li id="signup" className={activeNavlink === "signup" ? "active" : "unactive"}>
                Signup
              </li>
            </ul>
          ) : (
            <ul>
              <li id="logout">Logout</li>
            </ul>
          )}
        </nav>
      </header>
      <main id="main">{!loggedIn ? render() : <Dashboard />}</main>
    </>
  );
}
