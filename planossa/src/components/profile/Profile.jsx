import React from 'react';
import './Profile.css';

const PersonalCard = ({ image, name, role, description }) => {
  return (
    <div className="personal-card">
      <img src={image} alt={`${name}'s picture`} className="personal-card-image" />
      <div className="personal-card-content">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="personal-card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
