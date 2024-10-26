import { useState } from "react";
import Star from "./Star";
import StarFilled from "./StarFilled";

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [pages, setPages] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "bookName":
        setBookName(value);
        break;
      case "authorName":
        setAuthorName(value);
        break;
      case "pages":
        setPages(value);
        break;
      case "summary":
        setSummary(value);
        break;
      case "rating":
        setRating(value);
        break;
      default:
        break;
    }
  }

  function handleRatingChange(key) {
    setRating(key);
  }
  function renderStars() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarFilled id={i} key={i} size="28" handleClick={handleRatingChange} />);
      } else {
        stars.push(<Star id={i} key={i} size="28" handleClick={handleRatingChange} />);
      }
    }
    return stars;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { bookName, authorName, pages, summary, rating };

    try {
      const token = localStorage.getItem("token");
      fetch("https://library-mern-backend.onrender.com/user", {
        // fetch("http://localhost:3000/user", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `BEARER ${token}`,
        },
      });

      // reset inputs
      setBookName("");
      setAuthorName("");
      setPages("");
      setSummary("");
      setRating("");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h2>Fill in the details of the book you want to add to the library.</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="bookName">
          <span>Book</span>
          <input type="text" name="bookName" id="bookName" onChange={handleChange} value={bookName} />
        </label>
        <label htmlFor="authorName">
          <span>Author</span>
          <input type="text" name="authorName" id="authorName" onChange={handleChange} value={authorName} />
        </label>
        <label htmlFor="pages">
          <span>Pages</span>
          <input type="number" name="pages" id="pages" onChange={handleChange} value={pages} />
        </label>
        <label htmlFor="summary">
          <span>Summary</span>
          <textarea rows={7} type="text" name="summary" id="summary" placeholder="This book is about..." onChange={handleChange} value={summary}></textarea>
        </label>
        <label>
          <span>Rating</span>
          <span className="rating-stars">{renderStars()}</span>
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
