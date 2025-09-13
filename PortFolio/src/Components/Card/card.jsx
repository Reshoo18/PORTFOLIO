import React from 'react';
import "./Card.css";

// Your Card component now accepts 'showButton'
function Card({ title, image, repoUrl, showButton }) {
  return (
    <div className="card-container">
      <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
          <img src={image} alt={title} />
        </div>
      </div>
      
      {/* The button will only render if showButton is true */}
      {showButton && (
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-project-btn"
        >
          <button>View Project</button>
        </a>
      )}
    </div>
  );
}

export default Card;