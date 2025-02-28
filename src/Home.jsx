import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Book Library</h1>
      <button onClick={() => navigate("/add-book")} className="add-book-btn">
        Add Book
      </button>
      {/* BookCard components would be mapped here */}
    </div>
  );
};

export default Home;
