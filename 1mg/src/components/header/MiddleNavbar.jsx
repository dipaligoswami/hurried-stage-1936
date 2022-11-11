import React from "react";
import { FaMapMarkerAlt,FaSearch } from "react-icons/fa";
import {MdOutlineMyLocation} from "react-icons/md"

const MiddleNavbar = () => {
  return (
    <div>
      {" "}
      <div className="header_second_row">
        <div className="header_second_row_first_section">
          <div className="city_list">
            <div className="navigation_icon">
              <i className="fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
            </div>

            <input
              type="text"
              className="cities_input"
              placeholder="Enter your city"
            />

            <div className="locator_icon">
            <MdOutlineMyLocation/>
            </div>
          </div>

          <div className="search_box">
            <input
              type="text"
              className="search_input"
              placeholder="Search for Medicines and Health Products"
              id="search_input"
            />

            <span className="navigation_icon">
              <i className="fa fa-search"><FaSearch/></i>
            </span>
          </div>
        </div>

        {/* ------------------------------------------- */}

        <div className="header_second_row_second_section">
          <div className="discount_icon">
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg"
              alt="discount-Icon"
            />
          </div>

          <div className="discount_tag">
            QUICK BUY! Flat 25% off on medicines*
          </div>

          <button className="upload">Upload</button>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
