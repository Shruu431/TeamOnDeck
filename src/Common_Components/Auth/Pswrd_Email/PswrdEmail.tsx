import "./pswrdEmail.css";
import { PNG } from "../../../Assets";
import CallIcon from "@mui/icons-material/Call";

export default function PswrdEmail() {
  return (
    <div className="container ">
      <div className="row j-between">
        <div className=" m-l-10">
          <div>
            <img src={PNG.HEADLOGO} alt="logo" />
          </div>

          <div className=" a-items m-l-50 m-t-20 j-center">
            <div className="m-t-80">
              <p className="signIn">Requested to reset your password</p>
              <h5>We have sent your request to admin for reset password </h5>
              <h6>Vaibhav@pixoatic.com</h6>
            </div>
            <div>
              <button className="loginBtn m-t-10 primary-color" type="submit">
                Back To Login
              </button>
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
