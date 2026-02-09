import React from 'react';
import { FaStar, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Flashsale.css';

const Flashsale = () => {
  return (
      <div className="f-sektsiya">
        <div className="f-tepa">
          <h2 className="f-sarlavha">Tezkor Savdo</h2>
          <div className="f-tugmalar">
            <button className="t-chap">👈</button>
            <button className="t-ong">👉</button>
          </div>
        </div>

      <div className="f-blok">
        <div className="f-karta">
          <div className="r-qismi">
            <div className="belgilar">
              <span className="yangi">Yangi</span>
              <span className="chegirma">10%</span>
            </div>
            <img src="https://resource.logitech.com/w_600,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png" alt="sichqoncha" />
          </div>

          <div className="m-qismi">
            <h3 className="m-nomi">MX MASTER 3S Performance Wireless Mouse</h3>
            <div className="m-narx">
              <span className="hozir">$29.99</span>
              <span className="eski">$49.99</span>
            </div>

            <div className="m-rang">
              <div className="rang-nuqta" style={{ backgroundColor: '#111' }}></div>
              <div className="rang-nuqta" style={{ backgroundColor: '#ccc' }}></div>
              <div className="rang-nuqta" style={{ backgroundColor: '#fff' }}></div>
            </div>

            <div className="m-yulduz">
              <FaStar color="#00f2f2" />
              <FaStar color="#00f2f2" />
              <FaStar color="#00f2f2" />
              <FaStar color="#00f2f2" />
              <FaStar color="#00f2f2" />
              <span className="m-sharh">12 Sharh</span>
            </div>

            <div className="m-ombor">
              <div className="ombor-yozuv">
                <span>Sotildi: 16</span>
                <span>Qoldi: 64</span>
              </div>
              <div className="m-chiziq">
                <div className="m-tolish" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="m-vaqt">
              <div className="v-blok"><span>02</span><p>day</p></div>
              <div className="v-blok"><span>23</span><p>hour</p></div>
              <div className="v-blok"><span>14</span><p>Minute</p></div>
              <div className="v-blok"><span>56</span><p>Second</p></div>
            </div>

            <button className="savat-tugma">
              <FaShoppingCart /> Savatga qo'shish
            </button>
          </div>
        </div>

        
        <div className="f-karta">
          <div className="r-qismi">
            <div className="belgilar">
              <span className="chegirma">10%</span>
            </div>
            <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-listing-thumb-01-en-23aug22" alt="pult" />
          </div>

          <div className="m-qismi">
            <h3 className="m-nomi">Sony DualSense Edge Wireless Controller </h3>
            <div className="m-narx">
              <span className="hozir">$29.99</span>
              <span className="eski">$49.99</span>
            </div>

            <div className="m-rang">
              <div className="rang-nuqta" style={{ backgroundColor: '#111' }}></div>
              <div className="rang-nuqta" style={{ backgroundColor: '#fff' }}></div>
            </div>

            <div className="m-yulduz">
              <FaStar className='fastar' />
              <FaStar className='fastar' />
              <FaStar className='fastar' />
              <FaStar className='fastar' />
              <FaStar color="#ddd" />
              <span className="m-sharh">12 Sharh</span>
            </div>

            <div className="m-ombor">
              <div className="ombor-yozuv">
                <span>Sotildi: 16</span>
                <span>Qoldi: 64</span>
              </div>
              <div className="m-chiziq">
                <div className="m-tolish" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="m-vaqt">
              <div className="v-blok"><span>02</span><p>day</p></div>
              <div className="v-blok"><span>23</span><p>hour</p></div>
              <div className="v-blok"><span>14</span><p>Minute</p></div>
              <div className="v-blok"><span>56</span><p>Second</p></div>
            </div>

            <button className="savat-tugma">
              <FaShoppingCart /> Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;