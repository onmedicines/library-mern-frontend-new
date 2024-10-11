import { useEffect, useState } from "react";

import StarFilled from "../components/StarFilled.jsx";
import Star from "../components/Star.jsx";

export default function ViewBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://library-mern-backend.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
        console.log(data); //logs
      })
      .catch((err) => console.log(err.message));
  }, []);

  function renderStars(count) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(
          <span key={i} className="star-wrapper">
            <StarFilled />
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star-wrapper">
            <Star />
          </span>
        );
      }
    }
    return stars;
  }

  return (
    <>
      <div className="text">
        <h1>LIBRARY</h1>
        <h2>These are all the books that have been added to the library</h2>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : books.length > 0 ? (
        <div className="books-container">
          {books.map((book) => {
            return (
              <div key={book._id} className="book">
                <div className="book-img"></div>
                <div className="content">
                  <p className="book-name">{book.bookName}</p>
                  <p className="author-name">by {book.authorName}</p>
                  <p className="rating">{renderStars(book.rating)}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="error">The libray is empty. Try adding some books.</p>
      )}
    </>
  );
}
