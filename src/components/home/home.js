import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import burger from "./svg_icons/burger.svg";
import pizza from "./svg_icons/pizza.svg";
import cake from "./svg_icons/cake.svg";
import imgSection_image from "./assets/pngfind.com-plate-png-546398.png";
import Vendors from './vendor/vendor'
import Popular_food from "./populer_foods/Popular_food";
export default function Home(props) {
const onRemount =(e)=>{
props.data(e)
}
  return (
    <div>
      <div className="home_section">
        {/* hero section */}
        <div className="hero_section">
          <div className="hero_backround">
            <div className="info_section">
              <h1>
                Enjoy Our
                <br />
                <span> Delicious Food</span>
              </h1>
              <p>
                The perfect place to enjoy fine food withexellent <br /> service
                in comfortable sarroundings.{" "}
              </p>
              <button className="order_now">Order Now</button>
            </div>
            <div className="img_section">
              <img src={imgSection_image} alt="" />
            </div>
          </div>
          <div className="catlog_section">
            <div className="catlog_card">
              <Link>
                <div className="catlog_circle">
                  <img src={burger} alt="" />
                </div>
              </Link>
              <span>Burger</span>
            </div>
            <div className="catlog_card">
              <Link>
                <div className="catlog_circle">
                  <img src={pizza} alt="" />
                </div>
              </Link>
              <span>Pizza</span>
            </div>
            <div className="catlog_card">
              <Link>
                <div className="catlog_circle">
                  <img src={cake} alt="" />
                </div>
              </Link>
              <span>Cake</span>
            </div>
          </div>
          {/* hero section */}
{/* vendors */}
<Vendors/>
{/* vendors */}
{/* populer foods */}

<Popular_food data={onRemount}/>

  {/* populer foods */}
         
    </div>
    </div>
    </div>
  );
}
