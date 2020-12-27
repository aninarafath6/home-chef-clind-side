import React,{useState,useEffect} from 'react'
import './success.css'
import order_success_img from './assets/order_success.svg'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'

export default function Order_success() {
    const [isLogged, setLogged]= useState();
    useEffect(()=>{
  let config = {};

  let token = localStorage.getItem("user_token");
  if (token !== null) {
    config.headers = { authorazation: "Bearer " + token };
  }
           axios.get("/isLogged", config).then((response) => {
             setLogged(response.data.loggin);
           });

    },[])

    return (
      <>
        {isLogged === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
            <div className="order_success_container">
              <div className="success_img_wrapper">
                <img
                  src={order_success_img}
                  alt="order success"
                  className="order_success_img"
                />
                <h4>Order Placed Successfully</h4>
                <Link to="/orders" className="toViewLink">
                  View Orders
                </Link>
              </div>
            </div>
          </>
        )}
      </>
    );
}
