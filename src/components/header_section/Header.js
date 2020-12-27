import React,{useEffect, useRef, useState} from 'react';
import hamburger from './icons/hamburger.svg'
import home_chef_logo  from './icons/home_chef_logo.svg'
import './header.css'
import './mobile.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Header = (props) => {
  const menuRef = useRef()
  const fixedRef = useRef();
  const  [cart_count,set_Cart_count] = useState(0);
  const  [count,setCount] = useState(0);
  const [logged, setLogged] = useState();
  useEffect(()=>{
    let config = {};

    let token = localStorage.getItem("user_token");
    if (token !== null) {
      config.headers = { authorazation: "Bearer " + token };
    }
       axios.get("/isLogged", config).then((response) => {
         setLogged(response.data.loggin);
       });
    axios.get("user/cart-count",config).then((response)=>{
      set_Cart_count(response.data.count);
      console.log(response);
    })
  },[props.data])
const onOpenMenu =()=>{
  const menus = document.querySelectorAll('nav ul li');

  menuRef.current.classList.toggle('open');
  fixedRef.current.classList.toggle("fix_header");
  menus.forEach(menu=>{
    menu.classList.toggle("fade");
  })

}
    const onLogout =()=>{
      localStorage.clear('user_token')
      setCount(15 + 10 +count)
    }
    return (
      <div className="header_container" ref={fixedRef}>
        <div className="header_section">
          <div className="logo_section">
            <img className="logo" src={home_chef_logo} alt="" />
          </div>
          <nav>
            <ul ref={menuRef}>
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
              <li>
                {logged ? (
                  <Link to="/orders" className="NavLink">
                    Orders
                  </Link>
                ) : (
                  <Link to="/signup" className="NavLink">
                    Sign Up
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          {logged ? (
            <div className="cart">
              <Link to="/cart">
                <i class="fas fa-shopping-basket"></i>
                <div className="cart_count">{cart_count}</div>
              </Link>
            </div>
          ) : (
            <div className="cart">
              <Link to="/login ">
                <i class="fas fa-sign-in-alt"></i>
              </Link>
            </div>
          )}
          {logged ? (
            <div className="cart">
              <Link onClick={onLogout}>
                <i class="fas fa-sign-out-alt"></i>
              </Link>
            </div>
          ) : (
            <div className="no"></div>
          )}

          <div onClick={onOpenMenu} className="hambargerSection">
            <img className="hamburger" src={hamburger} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Header;
