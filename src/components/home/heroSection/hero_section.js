import React from 'react'
import './hero.css'
import imgSection_image from './assets/pngfind.com-plate-png-546398.png'
export default function Hero_section() {
    return (
      <div className="hero_section">
        <div className="hero_backround">
          <div className="info_section">
            <h1>
              Speed <br />
              <span> Home Delivery</span>
            </h1>
            <p>
              Curabitur imperdiet varius lacus, id placerat purus vulputate non.
              Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
              gravida vel porttitor et, pretium ac sapien.{" "}
            </p>
            <button className="order_now">
                Order Now
            </button>
          </div>
          <div className="img_section">
            <img src={imgSection_image} alt="" />
          </div>
        </div>
      </div>
    );
}
