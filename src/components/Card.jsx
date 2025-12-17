import React from 'react';
import './Card.css';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View</a>}
    </div>
  );
};

export default Card;