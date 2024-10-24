import React from "react";
import { Heart } from "lucide-react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">
        Happy Birthday! <Heart className="heart" />
      </h1>
      <p className="subtitle">Welcome to your special day!</p>
      <div className="content">
        <p>I've created this space to celebrate all our memories together...</p>
      </div>
    </div>
  );
}

export default Home;
