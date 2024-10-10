import { useState } from "react";

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "bookName":
        setBookName(value);
        break;
      case "authorName":
        setAuthorName(value);
        break;
      case "numberOfPages":
        setNumberOfPages(value);
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

  function handleSubmit(e) {
    e.preventDefault();
    const data = { bookName, authorName, numberOfPages, summary, rating };

    try {
      const apiResponse = fetch("http://localhost:3000/", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(apiResponse); // logs

      // reset inputs
      setBookName("");
      setAuthorName("");
      setNumberOfPages("");
      setSummary("");
      setRating("");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="text">
        <h1>ADD A BOOK</h1>
        <h2>Fill in the details of the book you want to add to the library.</h2>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="bookName">
          <span>Book</span>
          <input type="text" name="bookName" id="bookName" onChange={handleChange} value={bookName} />
        </label>
        <label htmlFor="authorName">
          <span>Author</span>
          <input type="text" name="authorName" id="authorName" onChange={handleChange} value={authorName} />
        </label>
        <label htmlFor="numberOfPages">
          <span>Pages</span>
          <input type="number" name="numberOfPages" id="numberOfPages" onChange={handleChange} value={numberOfPages} />
        </label>
        <label htmlFor="summary">
          <span>Summary</span>
          <textarea rows={7} type="text" name="summary" id="summary" placeholder="This book is about..." onChange={handleChange} value={summary}></textarea>
        </label>
        <label htmlFor="rating">
          <span>Rating</span>
          <input type="number" name="rating" id="rating" onChange={handleChange} value={rating} />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
