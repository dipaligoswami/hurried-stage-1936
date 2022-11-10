import React from "react";
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Divider,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

const MiddleFooter = () => {
  return (
    <Box>
      <Container >
        <Text>INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        <Grid>
          <GridItem>
            <Heading>260m+</Heading>
            <Text>Visitors</Text>
          </GridItem>
          <GridItem>
            <Heading>31m+</Heading>
            <Text>Orders Delivered</Text>
          </GridItem>
          <GridItem>
            <Heading>1800+</Heading>
            <Text>Cities</Text>
          </GridItem>
        </Grid>
        <Divider orientation="horizontal" />
        <Flex maxW="100%">
          <Text>Get the link to download App</Text>
          <Input variant="filled" placeholder="Enter Phone Number" />
          <Button>Send Link</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default MiddleFooter;
