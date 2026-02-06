import React from 'react';
import './Choose.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Choose = () => {
  return (
    <div className="choose-wrapper">
      <div className="choose-container">
        
        {/* Chap strelka */}
        <button className="slider-arrow">
          <IoIosArrowBack />
        </button>

        <div className="brand-list">
          <div className="brand-item"></div>
          <div className="brand-item active"></div> {/* Birinchisi rasmdagidek soya bilan */}
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

        {/* O'ng strelka */}
        <button className="slider-arrow">
          <IoIosArrowForward />
        </button>
        
      </div>
    </div>
  );
};

export default Choose;