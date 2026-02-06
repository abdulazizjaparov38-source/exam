import React from 'react';
import './Apples.css';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PRODUCT } from "../../components/index";

const Apples = () => {
  return (
    <div className="apples-container">
      {/* Header qismi */}
      <div className="apples-header">
        <h2 className="header-title">Tezkor Savdo</h2>
        <div className="header-nav">
          <button className="nav-btn"><IoIosArrowBack /></button>
          <button className="nav-btn active"><IoIosArrowForward /></button>
        </div>
      </div>

      <div className="apples-content">
        {/* Chap tomondagi Banner */}
        <div className="apples-banner">
          <div className="banner-txt">
            <h2>Iphone 14 Plus</h2>
            <p>Available in Stock!</p>
          </div>
          {/* Logo yoki rasm uchun joy bo'sh qolishi mumkin rasmda bo'lganidek */}
        </div>

        {/* O'ng tomondagi 9 talik Grid */}
        <div className="apples-grid">
          {PRODUCT.map((item, index) => (
            <div key={index} className="product-mini-card">
              <div className="card-img-box">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-details">
                <div className="price-row">
                  <b className="price-new">${item.price}</b>
                  <span className="price-old">${item.old}</span>
                </div>
                <p className="product-name">{item.title}</p>
                <div className="rating-row">
                  <div className="stars-box">
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                  </div>
                  <span className="reviews-count">{item.reviews} Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apples;