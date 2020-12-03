import React,{useEffect,useState} from 'react';
import './Cafes&Restaurants.css';
import test_image from './food-3309418_1920.jpg';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function Vendor() {
    const [vendors,setVendors]= useState([]);
   useEffect(()=>{
       axios.get('vendors').then((response)=>{
           setVendors(response.data.vendors);
           setVendors(response.data.vendors);

       })
   },[])
    return (
        <div>
             {/* <Cafes_Restaurants/> */}
          <div className="cafe_section">
            <div className="cafe_label">
              <h3>Cafes & Restaurants</h3>
            </div>
        {
            vendors.map((vendor)=>{
                return(
                        <div className="vendor_card_wrapper">
              <div className="vendor_image_wrapper">
                <img
                   src={
                                "http://localhost:3008/vendor_images/" +
                                vendor._id +
                                ".jpg"
                              }
                  alt=""
                  className="vender_img"
                  loading="lazy"
                />
              </div>
              <div className="vendor_info_wrapper">
                <div className="vendor_name">
                  <h4>{vendor.shope_name}</h4>
                </div>
                <div className="vendor_detials">
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
                    <div className="edit_vendor">
                      <div className="edit_circle">
                        <i class="fas fa-pencil-alt"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
                )
            })
                    }
          </div>

      {/* <Cafes_Restaurants/> */}
        </div>
    )
}
