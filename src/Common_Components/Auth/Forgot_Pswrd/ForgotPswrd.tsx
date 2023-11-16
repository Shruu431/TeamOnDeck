import * as React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./ForgotPswrd.css";
import { PNG } from "../../../Assets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

export default function ForgotPswrd() {
  return (
    <div className="container ">
      <div className="row j-between">
        <div className=" m-l-10">
          <div >
            <img src={PNG.HEADLOGO} alt="logo " />
          </div>

          <div className=" a-items m-l-50 m-t-20 j-center">
            <div className="m-t-80">


            <p className=" forgot_pswrd">Forgot Password?</p>
            <h5 className="light_grey_color m-t-10">No worries, we’ll send you reset instructions. </h5>
            <h6 className="light_grey_color m-t-10">You can &nbsp; &nbsp; <span className="purple">
            <a href="/login" style={{ textDecoration: "none" }}>
              Login here !
              </a>
              </span> </h6>
</div>
<div className="m-t-10 m-t-50">
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  <p className="inputlabel_content">Email</p>
                </InputLabel>
                <Input
                type='email'
                  className="input-w"
                  placeholder="Enter your email address"
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      {" "}
                      <MailOutlineIcon />
                      
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="m-t-50">
              <button className="loginBtn m-t-10 primary-color">Reset Password</button>
            </div>

          </div>

        </div>

        {/* **************** */}
        <div className="rightGrid">
          <div>
            <div className="num">
              <CallIcon /> +91 9041709902
            </div>

            <div className="">
              <img src={PNG.LOGINLOGO} className="img" />
            </div>
            <div className="poster-main">
              <p className="poster-m-content">Sign in to Team on Deck</p>
              <p className="poster-content">Always happy to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

