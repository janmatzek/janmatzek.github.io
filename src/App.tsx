import { useState } from "react";
import "./App.css";
import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  Text,
  Image,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box className="app-wrapper" width="100vw">
        <Flex className="introPage" width="100%" height="100vh" bg="darkGray">
          <Flex
            direction="column"
            justifyContent={"center"}
            width="50%"
            margin="8vw"
          >
            <Heading color="white">Hello world. </Heading>
          </Flex>
          <Flex
            direction="column"
            justifyContent="end"
            width="50%"
            margin="8vw"
          >
            <Text textAlign={"right"}>
              My name is Jan. I write code,<br></br>play music and make charts.
            </Text>
          </Flex>
        </Flex>
        <Flex
          className="aboutMe"
          width="100vw"
          height="90vh"
          bg="lightGray"
          justifyContent={"space-between"}
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 90vh, 0 80vh)",
            zIndex: 2,
            position: "relative",
          }}
        >
          <Image
            src="./src/assets/profilePic.jpg"
            maxWidth={"45vw"}
            objectFit={"cover"}
          ></Image>
          <Flex
            direction="column"
            justifyContent={"center"}
            width="37vw"
            marginRight={"8vw"}
          >
            <Heading textAlign={"right"} marginBottom={"4vh"}>
              About me
            </Heading>
            <Text textAlign={"right"} marginBottom={"8vh"}>
              I studied economics, but eventually I found my way to coding. You
              can look have a look at my CV or check out some of the stuff I
              have made
            </Text>
            <Flex direction="row" justifyContent={"end"}>
              <Button width="125px">Projects</Button>
              <Button width="125px" marginLeft="25px">
                Go to CV
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Box
          className="projects"
          width="100vw"
          height="110vh"
          bg="darkGray"
          marginTop="-10vh"
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 110vh, 0 100vh)",
            zIndex: 1,
            position: "relative",
          }}
          bgImage={"./src/assets/urbex.jpg"}
          bgPosition={"center"}
          backgroundAttachment="fixed"
        >
          <Box paddingTop="20vh" marginLeft="8vw" marginRight="8vw">
            <Heading marginBottom={"4vh"}>Projects</Heading>
            <Tabs isFitted variant="unstyled">
              <TabList mb="1em" borderBottom="2px solid" borderColor="gray.200">
                <Tab>Spotify Dashboard</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
        <Box
          className="contact"
          width="100vw"
          height="70vh"
          bg="lightGray"
          marginTop={"-10vh"}
        >
          <Box paddingTop="20vh" marginLeft="8vw" marginRight="8vw">
            <Heading marginBottom={"4vh"}>Get in touch!</Heading>
            <Flex width="100%">
              <Flex width="50%">
                <Text>Either ping me here or hit me up on LinkedIn!</Text>
              </Flex>
              <Flex
                direction="column"
                justifyContent={"right"}
                width="50%"
                height={"100%"}
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  width="350px"
                  marginBottom={"2vh"}
                  alignSelf="flex-end"
                  sx={{
                    "::placeholder": {
                      color: "gray.400", // Change this color as needed
                    },
                  }}
                />
                <Textarea
                  placeholder="Your message"
                  width="350px"
                  marginBottom={"2vh"}
                  alignSelf="flex-end"
                  sx={{
                    "::placeholder": {
                      color: "gray.400", // Change this color as needed
                    },
                  }}
                />
                <Button width="125px" alignSelf="flex-end">
                  Ping me!
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          className="footer"
          width="100vw"
          height="20vh"
          bgImage={"./src/assets/urbex.jpg"}
          bgPosition={"bottom"}
          backgroundAttachment="fixed"
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box>
              <Text>
                <Link
                  href="https://www.linkedin.com/in/jan-matzek-b1a276100/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>{" "}
                |{" "}
                <Link
                  href="https://github.com/janmatzek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
