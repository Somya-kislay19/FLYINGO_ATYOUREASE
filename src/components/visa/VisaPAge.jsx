import React from 'react';
import './VisaPAge.css';
import { useNavigate } from 'react-router-dom';

const VisaPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/vs"); 
  };


   

  const handleApplyClick = () => {
    navigate("/registration"); 
  }

  return (
    <div className="visa-section">
      <div className="card">
        <h2>Apply for Visa</h2>
        <p>Start your visa application process here.</p>
        
        <button className="visa-btn" onClick={handleApplyClick}>Apply Now</button>
      </div>
      <div className="card">
        <h2>Already have a Visa?</h2>
        <p>Explore your travel destinations.</p>
        <button className="visa-btn" onClick={handleExploreClick}>Explore Travels</button>
      </div>
    </div>
  );
};

export default VisaPage;
