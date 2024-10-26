import { useState } from "react";
import AddBook from "../components/AddBook";
import ViewBooks from "../components/ViewBooks";

export default function Dashboard() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <div className="text">
        <h1>Dashboard</h1>
      </div>
      {formVisible ? (
        <>
          <button
            className="add-view-button"
            onClick={() => {
              setFormVisible(false);
            }}>
            View books
          </button>
          <AddBook />
        </>
      ) : (
        <>
          <button
            className="add-view-button"
            onClick={() => {
              setFormVisible(true);
            }}>
            Add books
          </button>
          <ViewBooks />
        </>
      )}
    </>
  );
}
