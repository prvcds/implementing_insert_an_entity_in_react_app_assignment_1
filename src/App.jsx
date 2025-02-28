import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"; 
import AddBook from "./components/AddBook.jsx"; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;
