import React from "react";
import Footer from "../components/footer/Footer"
import UpperFooter from "../components/footer/UpperFooter";
import { Box, Divider } from "@chakra-ui/react";
import UpperNavbar from "../components/header/UpperNavbar";
import MiddleNavbar from "../components/header/MiddleNavbar"
import Navbar from "../components/header/Navbar"
const Home = () => {
  return (
    <div>
      <Box>
        <UpperNavbar />
        <MiddleNavbar/>
        <Navbar/>
      </Box>
      <Box>
        <UpperFooter />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
