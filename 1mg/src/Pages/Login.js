import React from "react";
import LoginRightside from "../components/header/LoginRightSide";
import "../CSS/login.css";
import { Divider, Center } from "@chakra-ui/react";
const Login = () => {
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
          <h2 className="loginHeading">Login</h2>
          <p className="styleText1">
            Get access to your orders, lab tests & doctor consultations
          </p>
          <input type="number" placeholder="Enter Email ID or Mobile Number" />
          <br />
          <input type="submit" value="Login" />
          <div className="newoncair">
            <p>New on CairFirst ? </p>
            <a href="" className="styletext2">
              {" "}
              Sign Up
            </a>
          </div>
          <div className="styletext3">
            <p>
              <p className="log">By logging in, you agree to our</p>
              <span>
                <a href="" className="linkTerms">
                  {" "}
                  Terms and Conditions{" "}
                </a>
              </span>{" "}
              &{" "}
              <span>
                <a href="" className="linkTerms">
                  Privacy Policy.
                </a>
              </span>
            </p>
          </div>
          <p className="newoncair">
            <a href="" className="styletext2">
              Need Help? Get In Touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
