import React from 'react';
import "./Cartlar.css";

const Cartlar = ({ data }) => {
  return (
    <div className='cartlar-sektsiya'>
     
      <div className="f-tepa">
        <h2 className="f-sarlavha">Categories</h2>
        <div className="f-tugmalar">
          <button className="t-chap">chap</button>
          <button className="t-ong">o'ng</button>
        </div>
      </div>

    
      <div className="six-cart">
        {data.map((item, index) => (
          <div key={index} className="k-karta">
            <div className="r-joyi">
              
            </div>
            <div className="m-cart">
              <h3 className="m-nomi">{item.nomi}</h3>
              <p className="m-tekst">{item.t1}</p>
              <p className="m-tekst">{item.t2}</p>
              <p className="m-tekst">{item.t3}</p>
              <p className="m-tekst">{item.t4}</p>
              <button className="m-link">All {item.nomi} ➡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartlar;