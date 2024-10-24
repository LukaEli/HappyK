import React from "react";
import "../styles/galery.css";

function Gallery() {
  const memories = [
    {
      id: 1,
      image: "/path-to-your-image-1.jpg", // Replace with your image path
      title: "Our First Date",
      date: "January 2023",
    },
    {
      id: 2,
      image: "/path-to-your-image-2.jpg",
      title: "Summer Vacation",
      date: "June 2023",
    },
    {
      id: 3,
      image: "/path-to-your-image-3.jpg",
      title: "Concert Night",
      date: "September 2023",
    },
    // Add more memories as needed
  ];

  return (
    <div className="gallery">
      <h2>Our Beautiful Memories</h2>
      <div className="photos-grid">
        {memories.map((memory) => (
          <div key={memory.id} className="photo-card">
            <img src={memory.image} alt={memory.title} />
            <div className="photo-caption">
              <div className="caption-title">{memory.title}</div>
              <div className="caption-date">{memory.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
