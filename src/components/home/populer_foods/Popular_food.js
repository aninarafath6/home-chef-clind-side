import React, { useEffect, useState } from "react";
import './Popular_food.css'
import './mobile.css'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';


export default function Popular_food(props){

    let item_div = document.getElementsByClassName('.pf_card');
console.log(item_div);


const [items,setItems] = useState([])
const [isLogged,setIsLogged]=useState(true);
 const [remount, setRemount] = useState(0);
  useEffect(()=>{
    axios.get('user/get-home-page-items').then(response=>{
      setItems(response.data.item);
    })
  },[])
  

  const onAddToCart =(item_id)=>{
 
      // console.log(item_id);
      let config = {};

      let token = localStorage.getItem("user_token");
      if (token !== null) {
        config.headers = { authorazation: "Bearer " + token };
      }
      const data = {id:item_id};
      axios.post("user/add-to-cart", data, config).then(response => {
        swal({
          title: "Good job!",
          text: "Item added to cart!",
          icon: "success",

        });
        setIsLogged(response.data.loggin);
           setRemount(remount *2 +3-5);
           props.data(remount);

      });
  }
    return (
      <>
        {isLogged === false ? (
          <Redirect to="/login" />
        ) : (
          <>
            <div className="popular_food_section">
              <div className="pf_label">
                <h3>Popular Foods</h3>
              </div>
              <div className="pf_card_wrapper">
                {items.map((item, key) => {
                  return (
                    <div className="pf_card" key={key}>
                      <div className="img_section_pf">
                        <img
                          src={
                            "http://localhost:3005/vendor_food_image/" +
                            item._id +
                            ".jpg"
                          }
                          alt=""
                        />
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
                          <p>{item.item_name}</p>
                        </div>
                        <div className="mini_dic">
                          <p>{item.short_description}</p>
                        </div>
                        {/* <div className="mini_dic">
                        <p>category : {item.category}</p>
                      </div> */}
                        <div className="pf_price">
                          <h4>
                            <i class="fas fa-rupee-sign"></i> {item.itemPrice}
                          </h4>
                        </div>
                        <div className="add_to_cart">
                          <button onClick={() => onAddToCart(item._id)}>
                            <i class="fas fa-shopping-basket"></i> Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="ads_back">
              <div className="ads">
                <h1>Express Home Delivery</h1>
                <p></p>
              </div>
            </div>
          </>
        )}
      </>
    );
}
