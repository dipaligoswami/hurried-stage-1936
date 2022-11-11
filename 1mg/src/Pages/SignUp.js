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
          <p className="otpstyletext1">
            Please enter your Mobile number to receive One Time Password (OTP)
          </p>
          <input type="number" placeholder="Enter Mobile Number" />
          <br />
          <div className="styletext4">
            <input type="checkbox" />
            <label> Are you a healthcare professional?</label>
          </div>
          <input type="submit" value="continue" />
          <div className="haveaccount">
            <p>Have an account? </p>
            <a href="" className="login">
              &nbsp; Login
            </a>
          </div>
          <div className="styletext3">
            <p>
              <p className="log">By signing up, you agree to our</p>
              <span>
                <a href="" className="linkTerms">
                  {" "}
                  Terms and Conditions
                </a>
              </span>{" "}
              &{" "}
              <span>
                <a href="" className="linkTerms">
                  {" "}
                  Privacy Policy
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
