import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Playlist from "./components/playlist";
import Gallery from "./components/Galery";
import Letter from "./components/Letter";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/letter" element={<Letter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
