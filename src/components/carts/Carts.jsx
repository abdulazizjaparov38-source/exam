import "./Carts.css"
import { DATA } from "../../components/index"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Cards = () => {
  return (
    <div className="cards-asos">
        <div className="f-tepa">
          <h2 className="f-sarlavha">Tezkor Savdo</h2>
          <div className="f-tugmalar">
             <button className="t-chap"><IoIosArrowBack /></button>
          <button className="t-ong"><IoIosArrowForward /></button>
          </div>
        </div>
      <div className="cards-grid">
        {DATA.map((item, index) => (
          <div key={index} className="c-karta">
            <div className="c-rasm">
              <img src={item.img} alt="img" />
              {item.skidka && <span className="c-skidka">{item.skidka}</span>}
            </div>
            
            <div className="c-matn">
              <div className="c-narx">
                <span className="c-p">${item.price}</span>
                {item.old && <span className="c-o">${item.old}</span>}
              </div>
              <p className="c-title">{item.title}</p>
              <b className="c-rate">⭐ {item.rate}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards