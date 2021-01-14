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
  const [logged, setLogged] = useState(false);
  useEffect(()=>{
    let config = {};

    let token = localStorage.getItem("user_token");
    if (token !== null) {
      config.headers = { authorazation: "Bearer " + token };
    }
       axios.get("isLogged", config).then((response) => {
         setLogged(response.data.loggin);
       });
    axios.get("user/cart-count",config).then((response)=>{
      set_Cart_count(response.data.count);
      console.log(response);
    })
  },[props.data])
  const closeMenu = ()=>{
    const menus = document.querySelectorAll('nav ul li');

    menuRef.current.classList.toggle('open');
    fixedRef.current.classList.toggle("fix_header");
    menus.forEach(menu=>{
      menu.classList.toggle("fade");
    })
  }
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
        <div class="logo_section">
  <h3 >HOME <span>CHEF</span></h3>
</div>
          <nav>
            <ul ref={menuRef}>
              <li>
                <Link onClick={closeMenu} to="/" className="NavLink">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/" className="NavLink">
                  About us
                </Link>
              </li> */}
              <li>
                <Link onClick={closeMenu} to="/our-shopes" className="NavLink">
                  Our Shoppes
                </Link>
              </li>
              
              <li>
                {logged ? (
                 <>
                  <Link onClick={closeMenu}  to="/orders" className="NavLink">
                    Orders
                  </Link>
                 
                 </>
                ) : (
                  <Link onClick={closeMenu} to="/signup" className="NavLink">
                    Sign Up
                  </Link>
                )}
              </li>
              <li>
                {
              logged ? (
            <div className="cart">
              <Link onClick={closeMenu} onClick={onLogout} className="NavLink">
            Logout
          </Link>
            </div>
          ) : (
            <Link onClick={closeMenu} to="/login" className="NavLink">
            Login
          </Link>
          )}
              </li>
              
              <li>
              {logged ? (
            <div className="cart">
              <Link to="/cart">
                <i class="fas fa-shopping-basket"></i>
                <div className="cart_count">{cart_count}</div>
              </Link>
            </div>
          ) : (
            <div className="cart">
            
            </div>
          )}
        
              </li>
            </ul>
          </nav>
          

          <div onClick={onOpenMenu} className="hambargerSection">
            <img className="hamburger" src={hamburger} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Header;
