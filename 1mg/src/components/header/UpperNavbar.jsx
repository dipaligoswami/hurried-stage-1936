import {
  Box,
  Image,
  List,
  ListItem,
  UnorderedList,
  Link,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import "../../CSS/upperNavbar.css";

const UpperNavbar = () => {
  return (
    <Box className="main">
      <Box>
        <Image src={require("../../assets/logo/careFirstlogo.png")} />
      </Box>
      <Box>
        <List>
          <UnorderedList>
            <Link>
              <ListItem>Medicines</ListItem>
            </Link>
            <Link>
              <ListItem>
                Lab Tests
                <Box>SAFE</Box>
              </ListItem>
            </Link>
            <Link>
              <ListItem>Consult Doctors</ListItem>
            </Link>
            <Link>
              <ListItem>COVID-19</ListItem>
            </Link>
            <Link>
              <ListItem>Ayurveda</ListItem>
            </Link>
            <Link>
              <ListItem>
                Care Plan
                <Box>SAVE MORE</Box>
              </ListItem>
            </Link>
          </UnorderedList>
        </List>
      </Box>
      <Box>
        <List>
          <UnorderedList>
            <Link>
              <ListItem>Login</ListItem>
            </Link>
            <Divider orientation="vertical" />
            <Link>
              <ListItem>Sign Up</ListItem>
            </Link>
          </UnorderedList>
        </List>
      </Box>
      <Box>Offers</Box>
      <Box>
        <Image src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg" />
      </Box>
      <Box>Need Help?</Box>
    </Box>
  );
};

export default UpperNavbar;
