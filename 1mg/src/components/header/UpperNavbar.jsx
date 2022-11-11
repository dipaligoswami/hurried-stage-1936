import { Link } from "@chakra-ui/react";
import React from "react";
import "../../CSS/upperNavbar.css";

const UpperNavbar = () => {
  return (
    <div className="header">
      <div className="header_first_row">
        <div className="header_first_row_first_section">
          <div className="logo">
            <Link className="logo_image" to="/">
              <img
                className="logo_image"
                src={require("../../assets/logo/careFirstlogo.png")}
                alt="Logo_img"
              />
            </Link>
          </div>

          <div className="text_inside_first_header_row">MEDICINES</div>

          <div className="text_inside_first_header_row">LAB TESTS</div>

          <div className="text_inside_first_header_row">ASK DOCTOR</div>

          <div className="text_inside_first_header_row">COVID19</div>

          <div className="text_inside_first_header_row">AYURVEDA</div>

          <div className="text_inside_first_header_row">CARE PLAN</div>
        </div>

        {/* -------------------------------------------------- */}

        <div className="header_first_row_second_section">
          <div className="login_signup">
            {/* <SignUpLogin /> */}
            <span
              // onClick={handleLogin}
              style={{ position: "relative", left: "-10px" }}
            >
              Login
            </span>
            |<span style={{ position: "relative", left: "10px" }}>Sign Up</span>
          </div>

          <div className="offers">Offers</div>

          <div className="cart_icon" id="cart_icon">
            {/* {CardItem > 0 ? <spna id="CartItem">{CardItem}</spna> : null} */}
          </div>

          <div className="help">Need Help?</div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
