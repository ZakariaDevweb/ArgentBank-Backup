import React from 'react';
import '../../assets/styles/styles.css';


const Features = ({ icon, title, texte }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {texte}
      </p>
    </div>
  );

};
export default Features;