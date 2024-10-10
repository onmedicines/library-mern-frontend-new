import { useEffect, useState } from "react";

export default function ViewBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

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
                  <p className="rating">{book.rating}</p>
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
