import * as React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
import { PNG } from "../../../Assets";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";

const Select = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Employee",
    label: "Employee",
  },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container ">
      <div className="row j-between">
        <div className="leftGrid m-l-10">
          <div style={{ marginBottom: "80px" }}>
            <img src={PNG.HEADLOGO} alt="logo" />
          </div>

          <div className=" a-items m-l-50">
            <div className="signIn">Sign In</div>
            <div className="m-t-10 ">
              <FormControl variant="standard">
                <TextField
                  id="standard-select-currency-native"
                  select
                  placeholder="Select"
                  label="Login As"
                  defaultValue="Select"
                  SelectProps={{
                    native: true,
                  }}
                  className="input-w"
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                >
                  {Select.map((option) => (
                    <option key={option.value} value={option.value}>
                      <AccountCircle />
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </FormControl>
            </div>
            <div className="m-t-10 ">
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  <p className="inputlabel_content">Email</p>
                </InputLabel>
                <Input
                  type="email"
                  required
                  id="email"
                  className="input-w"
                  placeholder="Enter your email address"
                  startAdornment={
                    <InputAdornment position="start">
                      {" "}
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="m-t-10 ">
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  <p className="inputlabel_content">Password</p>
                </InputLabel>
                <Input
                  className="input-w"
                  placeholder=" Enter Your Password"
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      {" "}
                      <LockOutlinedIcon />
                      <option></option>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="d-flex j-between m-t-10">
              <div className="remMe">
                <input type="checkbox" className="input_content" />
                &nbsp; Remerber me
              </div>
              <div className="m-l-5 forgetPswrd input_content">
                <a href="/forgotpswrd" style={{ textDecoration: "none" }}>
                  Forget Password ?
                </a>
              </div>
            </div>

            <div>
            <a href="/" className="loginBtn m-t-10 primary-color" type="submit">
                Login
            </a>
            </div>
          </div>
        </div>
           
        {/* **************** */}
        <div className="rightGrid">
          <div style={{ marginBottom: "50px" }}>
            <div className="num">
              <CallIcon /> +91 9041709902
            </div>

            <div className="">
              <img src={PNG.LOGINLOGO} className="img" alt="poster" />
            </div>
            <div style={{ padding: "10px", marginLeft: "10px" }}>
              <p className="poster-m-content">Sign in to Team on Deck</p>
              <p className="poster-content">Always happy to assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
