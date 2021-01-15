import React,{useEffect,useRef,useState} from 'react'
import './cart.css'
import './mobile.css'
import axios from 'axios'
import { Link, Redirect,useHistory } from 'react-router-dom';
 import empty_cart_image from './assets/undraw_empty_cart_co35.svg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';



export default function Cart() {
  let routeHistory =  useHistory();
  const inputRef = useRef();
    const [cart_items,set_cart_items] = useState([]);
    const [isLogged,setLogged] = useState();
    const [remount,setRemount] = useState(0);
    const [amount,setAmount] = useState({});

  
    useEffect(()=>{
         let config = {};

      let token =  localStorage.getItem("user_token");
      if (token !== null) {
        config.headers = { authorazation: "Bearer " + token };
      }
      
        axios.get("/isLogged",config).then(response=>{
            setLogged(response.data.loggin);
            if(!response.data.loggin){
              routeHistory.push('/login')
            }
        })
       axios.get("user/user-cart",config).then((response) => {
        //  console.log(response);
        set_cart_items(response.data.cart)
        console.log(response);

       });
       axios.get("user/get-total",config).then(response=>{
        
         setAmount(response.data.total)

       })


    })
    console.log({cart:cart_items})

    
    const onChange_Quantity =(cart_id,item_id,count)=>{
 let quantity = parseInt(document.getElementById(item_id).value);
              setRemount(remount + 1);

      let object = {
        cart_id: cart_id,
        item_id: item_id,
        value: count,
        quantity:quantity ,
        status:false

       
      };
        let config = {};

                let token = localStorage.getItem("user_token");
                if (token !== null) {
                  config.headers = { authorazation: "Bearer " + token };
                }
          axios.post('user/change-quantity',object).then(response=>{
            console.log(response);
            if(response.data.removeItem){
              setRemount(remount + 1);

              swal({
                title: "Success!",
                text: "1 item is removed!",
                icon: "success",
      
              });
           
         setRemount(remount + 1);
         setRemount(remount + 5);
         setRemount(remount + 8);
            }
            setRemount(remount + 1);
            setRemount(remount + 5);
            setRemount(remount + 8);
            if (document.getElementById(item_id).value  !== null){
            if(document.getElementById(item_id).value !== "1" && count !== "-1"){
              let quantity = (document.getElementById(item_id).value =parseInt(document.getElementById(item_id).value) + count);
               }
            if(document.getElementById(item_id).value !== 1 && count !== -1){
           let quantity = (document.getElementById(item_id).value =parseInt(document.getElementById(item_id).value) + count);
            }
          }
            setRemount(count + 2);
              axios.get("user/get-total", config).then((response) => {
                setAmount(response.data.total);
              });
           
                  
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


 

  const remove_cart_item =(cart_id,item_id)=>{
    const object={
      cart_id:cart_id,
      item_id:item_id
    }
     let config = {};
                                                                 
                let token = localStorage.getItem("user_token");
                if (token !== null) {
                  config.headers = { authorazation: "Bearer " + token };
                }

    
    swal({
      title: "Are you sure?",
      text: "Are you sure remove this item",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        
        swal("Poof! 1 item is deleted!", {
          icon: "success",
        });
        axios.post("user/remove-cart-item",object,config).then(response=>{
          if (response.data.removeItem) {
            setRemount(remount + 1);
          }
       })
      } else {
        swal("Your cart items is safe!");
      }
    });
  }
  console.log(amount);
    return (
      <>
        {cart_items[0] === undefined ? (
              <>
                <div className="cart_is_empty">
                  <img src={empty_cart_image} alt="" />
                  <Link to="/">Cart Is Empty!</Link>
                </div>
              </>
            ) : (
              <>
                <ToastContainer />
                <div className="cart_wrapper">
                  <div className="cart_container">
                    <div className="cart_items_container">
                      {cart_items.map((cart_item, key) => {
                        return (
                          <div className="cart_item_card">
                            <div className="cart_item_img">
                              <img
                                src={
                                  "http://142.93.209.150:8080/vendor_food_image/" +
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
                                  {/* <span  id={cart_item.food_item._id}>{cart_item.quantity}</span> */}
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
                                    type="number"
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

                                  <button
                                    onClick={() =>
                                      remove_cart_item(
                                        cart_item._id,
                                        cart_item.food_item._id
                                      )
                                    }
                                    className="item_remove_from_cart"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="price_details">
                      <div className="price_details_card">
                 
                        {amount.total !== undefined ? (
                          <>
                            {" "}
                            <div className="price_deti">
                              <div className="price_container">
                                <p>Price({cart_items.length} items)</p>
                                <p>₹{amount.total}</p>
                              </div>
                              <div className="price_container">
                                <p>Discount</p>
                                <p>₹{amount.discount}</p>
                              </div>
                              <div className="price_container">
                                <p>Delivery Charge</p>
                                <p>Free</p>
                              </div>
                              <div className="price_container total_cart_amount">
                                <p>Total Amount</p>
                                <p>₹{amount.total}</p>
                              </div>
                              <div className="price_container  cart_saved1-amount">
                                <p>You will save ₹3,800 on this order</p>
                              </div>
                              <div className="price_container Place_order_btn">
                                
                                <Link id="place_btn" to="/placeOrder">PLACE ORDER</Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                          loading...
                             </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
</>
    );
}
