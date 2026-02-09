import React from 'react';
import './Choose.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Choose = () => {
  return (
    <div className="choose-wrapper">
      <div className="choose-container">
        
        
        <button className="slider-arrow">
          <IoIosArrowBack />
        </button>

        <div className="brand-list">
          <div className="brand-item"></div>
          <div className="brand-item active"></div> 
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
          <div className="brand-item"></div>
        </div>

        <button className="slider-arrow">
          <IoIosArrowForward />
        </button>
        
      </div>
    </div>
  );
};

export default Choose;