import React,{useEffect,useRef,useState} from 'react'
import './cart.css'
import test_image from "./item_01-800x800.jpg";
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
 import empty_cart_image from './assets/undraw_empty_cart_co35.svg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const inputRef = useRef();
    const [cart_items,set_cart_items] = useState([]);
    const [isLogged,setLogged] = useState();
    const [remount,setRemount] = useState(0);

  
    useEffect(()=>{
         let config = {};

      let token =  localStorage.getItem("user_token");
      if (token !== null) {
        config.headers = { authorazation: "Bearer " + token };
      }
      
        axios.get("/isLogged",config).then(response=>{
            setLogged(response.data.loggin);
        })
       axios.get("user/user-cart",config).then((response) => {
        //  console.log(response);
        set_cart_items(response.data.cart)
        console.log(response);

       });

    },[remount])
    console.log({cart:cart_items})
    const onChange_Quantity =(cart_id,item_id,count)=>{
     let quantity = document.getElementById(item_id).value = parseInt(document.getElementById(item_id).value) + count;
      let object = {
        cart_id: cart_id,
        item_id: item_id,
        value: count,
        quantity:quantity,
        status:false

       
      };
          axios.post('user/change-quantity',object).then(response=>{
            console.log(response);
            if(response.data.removeItem){
              notify('1 item is removed')
              setRemount(remount + 1)
            }
          
          })
        }
          const onInpQntyCange = (e, item_id, cart_id) => {
            let object = {
              cart_id: cart_id,
              item_id: item_id,
              quantity: parseInt(e.target.value),
              status:true
            };
            console.log(object);
            axios.post("user/change-quantity",object);
          };


      const notify = (data,type) => {
    toast.warn(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

    return (
      <>
        {isLogged === false ? (
          <>
          <Redirect to='/login'/>
          </>
        ) : (
          <>
            {cart_items.length === 0 ? (
              <>
              <div className="cart_is_empty">
                  <img src={empty_cart_image} alt=""/>
                  <Link to="/">Cart Is Empty!</Link>
              </div>
              
              </>
            ) : (
              <>
                 <ToastContainer />
                <div className="cart_wrapper">
                  <div className="cart_container">
                    <div className="cart_items_container">
                    

                    {
                      cart_items.map((cart_item,key)=>{
                        return (
                          <div className="cart_item_card">
                            <div className="cart_item_img">
                              <img
                                src={
                                  "http://localhost:3008/vendor_food_image/" +
                                  cart_item.food_item._id +
                                  ".jpg"
                                }
                                alt=""
                              />
                            </div>
                            <div className="info">
                              <div className="item_name">
                                <h3>{cart_item.food_item.item_name}</h3>
                              </div>
                              <div className="cart_item_stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                              </div>
                              <div className="cart_item_price">
                                <h3>₹{cart_item.food_item.itemPrice}</h3>
                              </div>
                              <div className="cart_item_short_description">
                                <p>{cart_item.food_item.short_description}</p>
                              </div>
                              <div className="cart_act">
                                <div className="qnty">
                                  <button
                                    onClick={() =>
                                      onChange_Quantity(
                                        cart_item._id,
                                        cart_item.food_item._id,
                                        1
                                      )
                                    }
                                    className="inc_btn"
                                  >
                                    +
                                  </button>

                                  <input
                                  type="number"
                                    onChange={(e) =>
                                      onInpQntyCange(
                                        e,
                                        cart_item._id,
                                        cart_item.food_item._id
                                      )
                                    }
                                    id={cart_item.food_item._id}
                                    type="text"
                                    defaultValue={cart_item.quantity}
                                  />

                                  <button
                                    onClick={() =>
                                      onChange_Quantity(
                                        cart_item._id,
                                        cart_item.food_item._id,
                                        -1
                                      )
                                    }
                                    className="dec_btn"
                                  >
                                    -
                                  </button>

                                  <button className="item_remove_from_cart">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                    </div>
                    <div className="price_details">
                      <div className="price_details_card">
                        {/* <div className="price_details_header">
                <h4>PRICE DETAILS</h4>
              </div> */}
                        <div className="price_deti">
                          <div className="price_container">
                            <p>Price(2 items)</p>
                            <p>₹14,597</p>
                          </div>
                          <div className="price_container">
                            <p>Discount</p>
                            <p>₹12,597</p>
                          </div>
                          <div className="price_container">
                            <p>Delivery Charge</p>
                            <p>Free</p>
                          </div>
                          <div className="price_container total_cart_amount">
                            <p>Total Amount</p>
                            <p>₹18,597</p>
                          </div>
                          <div className="price_container  cart_saved1-amount">
                            <p>You will save ₹3,800 on this order</p>
                          </div>
                          <div className="price_container Place_order_btn">
                            <button>PLACE ORDER</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    );
}
