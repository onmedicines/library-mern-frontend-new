export default function App() {
  return (
    <div id="app-container">
      <header id="header">
        <nav>
          <h1>Library</h1>
          <ul>
            <li>Home</li>
            <li>View Books</li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <form>
          <label htmlFor="bookName">
            <span>Book:</span>
            <input type="text" name="bookName" id="bookName" />
          </label>
          <label htmlFor="authorName">
            <span>Author:</span>
            <input type="text" name="authorName" id="authorName" />
          </label>
          <label htmlFor="numberOfPages">
            <span>Pages:</span>
            <input type="number" name="numberOfPages" id="numberOfPages" />
          </label>
        </form>
      </main>
    </div>
  );
}
