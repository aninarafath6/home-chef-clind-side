import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import "./otp_pass.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
export default function Otp_password(props) {
  const otpRef = useRef();
  const passRef = useRef();
  const [type, setType] = useState();
  const [login, setLogin] = useState();
  const [count, setCount] = useState(0);
        useEffect(() => {
            var format = /[0-9]\w+/g;
            if (format.test(props.data)) {
            setType("otp");
            console.log("otp");
            } else {
            setType("email");
            console.log("email");
            }

             let config = {};

     let token = localStorage.getItem("user_token");
     if (token !== null) {
       config.headers = { authorazation: "Bearer " + token };
     }
     axios.get("user/isLogged", config).then((res) => {
       setLogin(res.data);
     });

        }, [count]);

    const onVerify_password = (e) => {
         e.preventDefault();
          let password = passRef.current.value;
          console.log(password);
        axios
        .post("user/verify-password", { password: password, email: props.email_or_pass })
        .then((response) => {
            console.log(response);
             if (response.data.user_token !== undefined) {
                  localStorage.setItem("user_token", response.data.user_token);
                  setCount(count+1)
                }
        });
    };
    const onVerify_code = (e) => {
        e.preventDefault();

        let otp = otpRef.current.state.numAsString;
        axios
        .post("user/verify-otp", { otp: otp, phone: props.email_or_pass })
        .then((response) => {
            console.log(response);
             if (response.data.user_token !== undefined) {
                  localStorage.setItem("user_token", response.data.user_token);
                  setCount(count+1)
                }
        });
    };
  return (
      <>
{
    login?(
        <>
        <Redirect to="/"/>
        </>
    ):(
        <>

    <div className="login">
      <div className="login_overlay">
        <div className="login_container otp_pss_con">
          <div className="header_label">
            {type === "otp" ? (
              <p className="otp_p">
                Enter the 6 digit code that send to <br />
                {props.number}
              </p>
            ) : (
              <p className="otp_p">Enter your Password</p>
            )}
          </div>
          <form action="" className="user_login_form">
            <div className="user_form_group">
              {type === "otp" ? (
                <>
                  <NumberFormat
                    ref={otpRef}
                    required
                    id="user_login_input"
                    class="btn btn-primary"
                    format="#       #       #       #       #       #"
                    mask="_"
                  />
                  <div className="user_login_label">
                    <label htmlFor="user_login_input">verification code</label>
                  </div>
                </>
              ) : (
                <>
                  <input
                  ref={passRef}
                    type="password"
                    required
                    id="user_login_input"
                    class="btn btn-primary"
                  />
                  <div className="user_login_label">
                    <label htmlFor="user_login_input">password</label>
                  </div>
                </>
              )}

              {type === "otp" ? (
                <>
                  <button
                    type="button"
                    onClick={onVerify_code}
                    type="button otp_pass_btn"
                    className="login_button"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={onVerify_password}
                    type="button otp_pass_btn"
                    className="login_button"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}
      </>
  );
}
