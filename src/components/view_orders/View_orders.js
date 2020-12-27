import React, { useEffect, useState } from "react";
import './view_orders.css'
import test_image from "../home/populer_foods/assets/item_02-480x480.jpg";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import not_fount_image from "./assets/not_fount_image.svg";
export default function View_orders() {
    const [orders,setOrders]= useState([]);
    const [logged,setLogged]= useState([]);
    useEffect(()=>{
           let config = {};
                                                                 
                let token = localStorage.getItem("user_token");
                if (token !== null) {
                  config.headers = { authorazation: "Bearer " + token };
                }
        axios.get("user/display-order",config).then(response=>{
            setOrders(response.data.orders)
           
        });
    },[])
    console.log(orders);
    return (
      <>
      {
logged === false?(
<>
<Redirect to="/login"/> 
</>
):(
  <>
    {orders.length === 0 ? (
          <>
            <div className="orders_null">
              <img src={not_fount_image} alt="" />
            </div>
          </>
        ) : (
          <>
            <div className="view_orders_container">
              {orders.map((item, key) => {
                return (
                  <div className="order_card" key={key}>
                    <div className="order_image_wrapper">
                      <div className="orders_img_section">
                        <img
                          src={
                            "http://localhost:3008/vendor_food_image/" +
                            item.order._id +
                            ".jpg"
                          }
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="order_name_and_category">
                      <div className="name">
                        <h4>{item.order.item_name}</h4>
                        <p>Category : {item.order.category}</p>
                        <p>Vendor : {item.order.vendor_name}</p>
                        <p>Quantity : {item.quantity}</p>
                      </div>
                    </div>
                    <div className="price_section">
                      <p>₹{item.order.itemPrice}</p>
                      <p className="payment_method_oreders">
                        {item.paymentMethod}
                      </p>
                    </div>
                    <div className="order_traking_section">
                      <div className="order_status">
                        <i class="fas fa-circle"></i>
                        <p>{item.status}</p>
                      </div>
                      <div className="order_status_ex">
                        <p>
                          order is {item.status} <br/> on {item.date}
                        </p>
                        <Link className="order_more_det_btn">more details</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        </>
) 
      }
      </>
    );
}
