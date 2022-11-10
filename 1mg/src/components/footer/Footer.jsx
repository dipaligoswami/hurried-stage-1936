import {
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Container,
  Flex,
  Link,
  Image,
  Button
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Flex>
          <List>
            <UnorderedList>
              <Link>
                <ListItem>Know Us</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Press Coverage</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Business Partnership</ListItem>
                <ListItem>Become a Health Partner</ListItem>
                <ListItem>Corporate Governance</ListItem>
              </Link>
            </UnorderedList>
          </List>
          <List>
            <UnorderedList>
              <ListItem>Our Policies</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms and Conditions</ListItem>
              <ListItem>Editorial Policy</ListItem>
              <ListItem>Return Policy</ListItem>
              <ListItem>IP Policy</ListItem>
              <ListItem>Grievance Redressal Policy</ListItem>
            </UnorderedList>
          </List>
          <List>
            <UnorderedList>
              <ListItem>Our Services</ListItem>
              <ListItem>Order Medicines</ListItem>
              <ListItem>Book Lab Tests</ListItem>
              <ListItem>Consult a Doctor</ListItem>
              <ListItem>Ayurveda Articles</ListItem>
              <ListItem>Hindi Articles</ListItem>
              <ListItem>Care Plan</ListItem>
            </UnorderedList>
          </List>
          <List>
            <UnorderedList>
              <ListItem>Connect</ListItem>
              <ListItem>
                Social Links
                <UnorderedList>
                  <Link>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/vqpr5zx9ofpsyafjwwin.svg" />
                    </ListItem>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/wwynoy59i3iakt8te5xl.svg" />
                    </ListItem>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/cwrpdmlzckwzvv9e1gjv.svg" />
                    </ListItem>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/tywtfwyzxb8ujnqmbuau.svg" />
                    </ListItem>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/hqfglkzkfxaxaypniixn.svg" />
                    </ListItem>
                    <ListItem>
                      <Image src="https://onemg.gumlet.io/ny7nk9wxxlcxpeh1jbgg.svg" />
                    </ListItem>
                  </Link>

                </UnorderedList>
              </ListItem>
              <ListItem>Want daily dose of health?</ListItem>
              <ListItem><Button>Sign Up</Button></ListItem>
            </UnorderedList>
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
