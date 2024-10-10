import { useState } from "react";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import ViewBooks from "./pages/ViewBooks.jsx";

export default function App() {
  const [activeNavlink, setActiveNavlink] = useState("home");

  function handleNavlinkChange(e) {
    const { id } = e.target;
    if (id === "home") {
      setActiveNavlink("home");
    } else if (id === "viewBooks") {
      setActiveNavlink("viewBooks");
    } else if (id === "addBook") {
      setActiveNavlink("addBook");
    }
  }

  function render() {
    switch (activeNavlink) {
      case "home":
        return <Home />;
      case "addBook":
        return <AddBook />;
      case "viewBooks":
        return <ViewBooks />;
      default:
        return <ErrorPage />;
    }
  }

  return (
    <>
      <header id="header">
        <nav onClick={handleNavlinkChange}>
          <h1>Library</h1>
          <ul>
            <li id="home" className={activeNavlink === "home" ? "active" : "unactive"}>
              Home
            </li>
            <li id="addBook" className={activeNavlink === "addBook" ? "active" : "unactive"}>
              Add book
            </li>
            <li id="viewBooks" className={activeNavlink === "viewBooks" ? "active" : "unactive"}>
              View book
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">{render()}</main>
    </>
  );
}
