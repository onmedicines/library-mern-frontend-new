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
      <div className="books-container">
        <div className="book">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            books.map((book) => {
              return (
                <div key={book._id} className="book">
                  <h1>{book.bookName}</h1>
                  <p>{book.authorName}</p>
                  <p>{book.numberOfPages}</p>
                  <p>{book.summary}</p>
                  <p>{book.rating}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
