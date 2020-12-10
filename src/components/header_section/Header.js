import React,{useRef} from 'react';
import hamburger from './icons/hamburger.svg'
import home_chef_logo  from './icons/home_chef_logo.svg'
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
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
                <Link to='/' className="NavLink">Home</Link>
              </li>
              <li>
                <Link to='/' className="NavLink">About us</Link>
              </li>
              <li>
                <Link to='/' className="NavLink">Our Shoppes</Link>
              </li>
              <li>
                <Link to='/' className="NavLink">Contact us</Link>
              </li>
            </ul>
          </nav>

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
            <div className="cart">
              <i class="fas fa-shopping-basket"></i>
              <div className="cart_count">2</div>
            </div>
            <div className="search">
<i onClick={onLogout} class="fas fa-sign-out-alt"></i>            </div>
          </div>
          {/* <input
          ref={searchRef}
          className="search_input search_none"
          type="text"
        /> */}
        </div>
        .
      </div>
    );
}

export default Header;
