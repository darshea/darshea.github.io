import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemButton.css'

const ItemButton = ({ text, to }) => {
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (to.startsWith('/') || to === '/home' || to === '/biography' || to === '/contact' || to === '/construction') {
        navigate(to); // Navigate to internal route
      } else {
        window.location.href = to; // Redirect to external URL
      }
    };
  
    return (
      <button className = "ItemButton" onClick={handleClick}>
        <span>{text}</span>
      </button>
    );
};
  

export default ItemButton;