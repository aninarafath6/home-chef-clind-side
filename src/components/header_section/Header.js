import React,{useEffect, useRef, useState} from 'react';
import hamburger from './icons/hamburger.svg'
import home_chef_logo  from './icons/home_chef_logo.svg'
import './header.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Header = (props) => {
  const  [cart_count,set_Cart_count] = useState(0);
  useEffect(()=>{
    let config = {};

    let token = localStorage.getItem("user_token");
    if (token !== null) {
      config.headers = { authorazation: "Bearer " + token };
    }
    axios.get("user/cart-count",config).then((response)=>{
      set_Cart_count(response.data.count);
      console.log(response);
    })
  },[props.data])
    // const searchRef =useRef();
    // const OtherRef =useRef();


    // const search_btn_clicked =()=>{
    //     searchRef.current.classList.remove("search_none");
    //     OtherRef.current.classList.add("anim");
    //     setTimeout(() => {
    //         OtherRef.current.classList.add("display_none");
            
    //     }, 700);
    // }
    const onLogout =()=>{
      localStorage.clear('user_token')
    }
    return (
      <div className="header_container">
        <div className="header_section">
          {/* <div className="hambargerSection">
            <img className="hamburger" src={hamburger} alt="" />
          </div> */}
          <div className="logo_section">
            <img className="logo" src={home_chef_logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="NavLink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="NavLink">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="NavLink">
                  Our Shoppes
                </Link>
              </li>
              <li>
                <Link to="/" className="NavLink">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <Link to="/cart">
              <i class="fas fa-shopping-basket"></i>
              <div className="cart_count">{cart_count}</div>
            </Link>
          </div>
          {/* 
          <div className="other-nav">
            <div className="phone">
              <i class="fas fa-phone-alt"></i>
              <span className="phone-no">017-185-1195</span>
            </div>
            <div className="user">
              <Link to="/login">
                <i class="fas fa-user"></i>
              </Link>
            </div>
        
            <div className="search">
              <i onClick={onLogout} class="fas fa-sign-out-alt"></i>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default Header;
