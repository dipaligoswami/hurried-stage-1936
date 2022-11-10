import React from "react";
import Footer from "../components/footer/Footer";
import MiddleFooter from "../components/footer/MiddleFooter";
import UpperFooter from "../components/footer/UpperFooter";
import { Box, Divider } from "@chakra-ui/react";
import UpperNavbar from "../components/header/UpperNavbar";

const Home = () => {
  return (
    <div>
      <Box>
        <UpperNavbar />
      </Box>
      <Box>
        <UpperFooter />
        <MiddleFooter />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
