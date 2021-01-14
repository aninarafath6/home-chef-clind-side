import React,{useEffect,useState} from 'react';
import './ourShopes.css';
import './mobile.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Vendor() {

 
    const [vendors,setVendors]= useState([]);
   useEffect(()=>{
       axios.get('user/our-shope').then((response)=>{
           setVendors(response.data.data);

       })
   },[])
    return (
      <div>
        {/* <Cafes_Restaurants/> */}
        <div className="cafe_section">
          <div className="cafe_label">
            <h3>Our Shopes</h3>
          </div>
           <div className="vendor_cards"></div>
            {vendors.map((vendor, key) => {
              return (
                <>
                  <div className="vendor_card" >
                    <div className="face face1">
                      <div className="vendor_card_img_content">
                        <img
                          src={
                            "http://142.93.209.150:8080/vendor_images/" +
                            vendor._id +
                            ".jpg"
                          }
                          alt=""
                        />
                        <div className="shope_name_wrapper">
                          <span>{vendor.shope_name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="vendor_card_info_content">
                        <h3>{vendor.shope_name}</h3>
                        <ul className="vendor_info">
                          <li>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            <span>{vendor.serviceDays.toLowerCase()}</span>
                          </li>
                          <li>
                            <i className="fas fa-clock"></i>{" "}
                            <span>{vendor.serviceTime.toLowerCase()}</span>
                          </li>
                          <li>
                            <i className="fas fa-map-marked-alt"></i>{" "}
                            <span>{vendor.location.toLowerCase()}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="IWrapper">
                        <Link>
                          <div className="C">
                            <div className="edit_circle">
                              <i class="fas fa-arrow-right"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
             </div>
        </div>

     
    );
}
