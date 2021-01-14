import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';

const Add_vendor = () => {
  const routeHistory = useHistory();
const errrLAbelRef =useRef();
const otpLebalRef = useRef();
  const [isLogged, setLogged] = useState();

  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [passWord,setPassword] = useState('');
  const [phone,setPhone] = useState();
  const [err_label_state, setErr_label_state] = useState("");
  const [signup, setSignup] = useState();


  useEffect(()=>{
         let config = {};

    let token = localStorage.getItem("user_token");
   if (token!==null){
    config.headers={ authorazation: "Bearer " + token};

   }
   axios.get("user/isLogged", config).then((res) => {
       setSignup(res.data);
     });
  },[])

  const submitHadiler =(e)=>{
    e.preventDefault()
if (Name=== " " || Email === " " || passWord=== " " || phone ===" ") {
  setErr_label_state("pleas fill all inputs")
  swal({
    title:"Please fill all inputs",
    text: "check all inputs and fill valid info",
    icon: "error",
  });
}else{
  const user_data ={
    name:Name,
    email:Email,
    password:passWord,
    phone:phone
  }
  axios.post('/user/signup',user_data).then(res=>{
    console.log(res);
    if(res.data.user_token !== undefined){
      localStorage.setItem("user_token", res.data.user_token);
 }
 if(res.data.user_already){
  swal({
    title:"Email is already exist",
    text: "Please try with another email",
    icon: "warning",
  });
 }
 if(res.data.user_signup){
      
  swal({
    title:"Login successfully",
    text: "Hi,welcome to home chef!",
    icon: "success",
  });
  routeHistory.push('/')

        
  

 }
  })
}
  }

  return (
    <div className="add_vendor_container">
      <div id="map"></div>
            <div className="add_vendor_ovarly">
              <div className="add_vendor_section">
                <form onSubmit={submitHadiler} className="add_vendor_form">
                  <div className="add_vendor_header_label">
                    <h3>Sign Up</h3>
                  </div>
                  <div className="vendor_input_section">
                    <p ref={errrLAbelRef} className="errLabel">
                     {err_label_state}
                    </p>
                    <div className="vendor_input">
                      <input
                        name="vendor_name"
                        type="text"
                        required
                        id="vendor_name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label
                        htmlFor="vendor_name"
                        className="vender_input_label"
                      >
                        Name
                      </label>
                    </div>
                    <div className="vendor_input">
                      <input
                        autoComplete="off"
                        name="shope_name"
                        type="text"
                        required
                        id="shop_name"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="shop_name" className="vender_input_label">
                        Email
                      </label>
                    </div>

                    <div className="vendor_input">
                      <input
                        autoComplete="off"
                        name="location"
                        type="password"
                        required
                        id="location"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="location" className="vender_input_label">
                        Password
                      </label>
                    </div>
                    <div className="vendor_input">
                      <NumberFormat onChange={(e) => setPhone(e.target.value)}   required id="location" format="+91##########" mask="_"/>
                      {/* <input
                        autoComplete="off"
                        name="location"
                        type="number"
                        required
                        id="location"
                        onChange={(e) => setPhone(e.target.value)}
                      /> */}
                      <label htmlFor="location" className="vender_input_label">
                        Phone
                      </label>
                    </div>
                  
                    <input
                      id="submit_vendor"
                      className="submit_vendor"
                      type="submit"
                      value="Sign up"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
  );
};

export default Add_vendor;
