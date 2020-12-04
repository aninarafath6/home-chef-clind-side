import React from 'react'
import './Popular_food.css'
import img_1 from './assets/pizza_01-480x480.jpg'
import img_2 from './assets/item_01-800x800.jpg'
import img_3 from './assets/item_03-800x800 (1).jpg'
import img_4 from './assets/item_04-800x800.jpg'
export default function Popular_food() {

    return (
      <>
     
        <div className="popular_food_section">
          <div className="pf_label">
            <h3>Popular Foods</h3>
          </div>
          <div className="pf_card_wrapper">
            <div className="pf_card">
              <div className="img_section_pf">
                <img src={img_4} alt="" />
              </div>
              <div className="info_section_pf">
                <div className="starts">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="pf_name">
                  <p>Cheese Burger With Saled </p>
                </div>
                <div className="mini_dic">
                  <p>
                    A fusion of classic burger with Mexican sauce. little bit of
                    spicy.double patty of tikki is used.
                  </p>
                </div>
                <div className="pf_price">
                  <h4>
                    <i class="fas fa-rupee-sign"></i> 5,00
                  </h4>
                </div>
                <div className="add_to_cart">
                  <button>
                    <i class="fas fa-shopping-basket"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="pf_card">
              <div className="img_section_pf">
                <img src={img_1} alt="" />
              </div>
              <div className="info_section_pf">
                <div className="starts">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="pf_name">
                  <p>Cheese Burger With Saled </p>
                </div>
                <div className="mini_dic">
                  <p>
                    A fusion of classic burger with Mexican sauce. little bit of
                    spicy.double patty of tikki is used.
                  </p>
                </div>
                <div className="pf_price">
                  <h4>
                    <i class="fas fa-rupee-sign"></i> 5,00
                  </h4>
                </div>
                <div className="add_to_cart">
                  <button>
                    <i class="fas fa-shopping-basket"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="pf_card">
              <div className="img_section_pf">
                <img src={img_2} alt="" />
              </div>
              <div className="info_section_pf">
                <div className="starts">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="pf_name">
                  <p>Cheese Burger With Saled </p>
                </div>
                <div className="mini_dic">
                  <p>
                    A fusion of classic burger with Mexican sauce. little bit of
                    spicy.double patty of tikki is used.
                  </p>
                </div>
                <div className="pf_price">
                  <h4>
                    <i class="fas fa-rupee-sign"></i> 5,00
                  </h4>
                </div>
                <div className="add_to_cart">
                  <button>
                    <i class="fas fa-shopping-basket"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="pf_card">
              <div className="img_section_pf">
                <img src={img_3} alt="" />
              </div>
              <div className="info_section_pf">
                <div className="starts">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="pf_name">
                  <p>Cheese Burger With Saled </p>
                </div>
                <div className="mini_dic">
                  <p>
                    A fusion of classic burger with Mexican sauce. little bit of
                    spicy.double patty of tikki is used.
                  </p>
                </div>
                <div className="pf_price">
                  <h4>
                    <i class="fas fa-rupee-sign"></i> 5,00
                  </h4>
                </div>
                <div className="add_to_cart">
                  <button>
                    <i class="fas fa-shopping-basket"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ads_back">
          <div className="ads">
            <h1>Express Home Delivery</h1>
            <p></p>
          </div>
        </div>
      </>
    );
}
