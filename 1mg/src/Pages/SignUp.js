import React from "react";
import LoginRightside from "../components/header/LoginRightSide";
import "../CSS/signUp.css";
import { Divider, Center } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="leftPart">
          <LoginRightside />
        </div>
        <Center height="auto">
          <Divider orientation="vertical" />
        </Center>
        <div className="rightPart">
          <h2 className="headingSignup">Sign Up</h2>
          <p>
            Please enter your Mobile number to receive One Time Password (OTP)
          </p>
          <input type="number" placeholder="Enter Mobile Number" />
          <input type="checkbox" />
          <label>Are you a healthcare professional?</label>
          <input type="submit" value="continue" />
          <div>
            <p>Have an account?</p>
            <a href="">Login</a>
          </div>
          <div>
            <p>
              By signing up, you agree to our
              <span>
                <a href="">Terms and Conditions</a>
              </span>{" "}
              &{" "}
              <span>
                <a href="">Privacy Policy</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
