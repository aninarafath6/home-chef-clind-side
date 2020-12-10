import React, { useState, useRef, useEffect } from "react";
import { Redirect ,Link} from "react-router-dom";
import GoogleLogin from "react-google-login";
import "./Login.css";
import formData from "form-data";
import axios from "axios";
import google_icon from './assets/search.svg'
import New_page from './assets/otp_or_password/otp_password'
const Add_vendor = () => {
    const inputRef = useRef();
    const [login, setLogin] = useState(false);
    const [phone, setPhone] = useState();
    const [to_next_page, setTo_next_page] = useState();
    const [count,setCount] = useState(0);
 

          useEffect(()=>{
            let config = {};

            let token = localStorage.getItem("user_token");
            if (token !== null) {
              config.headers = { authorazation: "Bearer " + token };
            }
            axios.get("user/isLogged", config).then((res) => {
              
              setLogin(res.data);
            });
          },[count])

  const onFailure = (response) => {
    // return alert(' oops!! your google login is failed!! please tray again')

  };
      const onSuccess = (response) => {
        console.log(response);
       axios.post("auth/google-login",response).then((response)=>{
         console.log(response);
         if(response.data.auth){
           if (response.data.user_token !== undefined) {
             localStorage.setItem("user_token", response.data.user_token);
             setCount(count + 1);
            }
            setLogin(true)
            
            return alert(`Hi, welcome to home-chef`);
         }else{
            return alert(`oops!!,sorry login failed tray again `);
         }
       })
      };
      const customStyle = {
        color: "rgb(128 128 128)",
        backgroundColor: "#fff",
        padding: " 3px",
        border: "1px solid rgb(196 196 196)",
        outline: " none",
        borderRadius: "10px",
        width: "100%",
        height: "39px",
        position: "relative",
        cursor: "pointer",
      };

      const onCheckEmail =()=>{
        let email = inputRef.current.value;
        let mail_format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(\+[1-9]{1}[0-9]{3,14})+$/;
        if(email === ""){
          return alert("Please enter your Email or Phone Number")
        }else if(!mail_format.test(email)){
          return alert('please enter your Email or Phone Number')
              to_next_page(false);

        }else{
          setPhone(inputRef.current.value);
          axios.post("user/login",{input: inputRef.current.value}).then((response) => {
            
            if(response.data.user === false){
              return alert("not user found in this information")
            }
            setTo_next_page(true);
          });
        }
       
      }
  
  return (
    <>
      {to_next_page ? (
        <>
          <New_page email_or_pass={phone} data={inputRef.current.value} />
        </>
      ) : (
        <>
          {login ? (
            <>
              <Redirect to="/" />
            </>
          ) : (
            <>
              <div className="login">
                <div className="login_overlay">
                  <div className="login_container">
                    <div className="header_label">
                      <h2>User Login</h2>
                    </div>
                    <form action="" className="user_login_form">
                      <div className="user_form_group">
                        <input
                          ref={inputRef}
                          required
                          id="user_login_input"
                          class="btn btn-primary"
                        />
                        <div className="user_login_label">
                          <label htmlFor="user_login_input">
                            Email Or Mobile No (with country code){" "}
                          </label>
                        </div>
                        <div className="or">
                          <p>or</p>
                        </div>
                        <div className="google_auth">
                          <GoogleLogin
                            id="google_auth_btn"
                            clientId="1077934602066-kg25mi8fh0l03gokhvs7ug5k1un3hb16.apps.googleusercontent.com"
                            render={(renderProps) => (
                              <button
                                className="btn_costom_gBtn"
                                onClick={renderProps.onClick}
                                style={customStyle}
                              >
                                <img
                                  src={google_icon}
                                  alt=""
                                  className="google_icon"
                                />{" "}
                                <span className="google_span">
                                  {" "}
                                  Login With Google
                                </span>
                              </button>
                            )}
                            buttonText="Login"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={"single_host_origin"}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={onCheckEmail}
                          className="login_button"
                        >
                          Login
                        </button>
                        <div className="to_sign_up">
                          <Link to="/signup">Don't have an account?</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Add_vendor;
