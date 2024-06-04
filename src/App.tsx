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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import { keyframes, css } from "@emotion/react";

// TODO: responsive design (hurts just to write that)
function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [buttonLoading, setButtonLoading] = useState(false);

  const handlePingClick = () => {
    // TODO: check if input boxes are populated
    setButtonDisabled(true);
    setButtonLoading(true);
    // TODO: Call ping-my-telegram. Check response -> if OK, then set buttonLoading to false, button stays disabled, text "Message sent" if not OK, set buttonLoading to false, raise error, enable button, text "Try again"
  };

  const useBlurInAnimation = (duration = "1.5s") => {
    const blurIn = keyframes`
      0% {
        filter: blur(10px);
        opacity: 0;
      }
      100% {
        filter: blur(0);
        opacity: 1;
      }
    `;

    const animation = css`
      animation: ${blurIn} ${duration} ease-in-out forwards;
    `;

    return animation;
  };

  return (
    <>
      <Box className="app-wrapper" width="100vw">
        <Flex
          className="introPage"
          width="100%"
          height="100vh"
          bg="darkGray"
          direction={["column", "row"]} // Stack vertically on smaller screens, row on larger
          justifyContent={["space-evenly", "center)"]}
        >
          <Flex
            direction="column"
            justifyContent={"center"}
            width={["100vw", "50vw"]}
            padding={["4vw", "8vw"]} // Smaller margin on mobile
          >
            <Heading color="white" css={useBlurInAnimation("1s")}>
              Hello world.
            </Heading>
          </Flex>
          <Flex
            direction="column"
            justifyContent="end"
            width={["100vw", "50vw"]}
            padding={["4vw", "8vw"]} // Smaller margin on mobile
          >
            <Text
              textAlign={"right"}
              css={useBlurInAnimation("1.5s")}
              fontSize={["14px", "16px"]}
              // marginRight={["4vw", "0"]}
            >
              My name is Jan. I write code,
              <br />
              play music and make charts.
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
            src="./assets/profilePic.jpg"
            maxWidth={"45vw"}
            objectFit={"cover"}
          ></Image>
          <Flex
            direction="column"
            justifyContent={"center"}
            width={["90vw", "37vw"]}
            marginRight={["4vw", "8vw"]}
          >
            <Heading textAlign={"right"} marginBottom={"4vh"}>
              About me
            </Heading>
            <Text
              textAlign={"right"}
              marginBottom={["1vh", "2vh"]}
              fontSize={["14px", "16px"]}
            >
              I studied economics, but eventually I found my way to coding. You
              can have a look at my CV or check out some of the stuff I made.
            </Text>
            <Flex
              direction={["column", "row"]}
              justifyContent={["space-evenly", "flex-end"]}
              alignItems={"flex-end"}
            >
              <ScrollLink to="projects-section" smooth={true} duration={500}>
                <Button
                  width={["100px", "125px"]}
                  marginLeft={["0", "25px"]}
                  marginTop="25px"
                >
                  Projects
                </Button>
              </ScrollLink>
              <Link
                href="https://www.canva.com/design/DAFVeu9ROKw/qeYh1U_yUWhzNmkpUn-3Yg/view?utm_content=DAFVeu9ROKw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener, noreferrer"
              >
                <Button
                  width={["100px", "125px"]}
                  marginLeft={["0", "25px"]}
                  marginTop="25px"
                >
                  Go to CV
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Box
          className="projects"
          width="100vw"
          height={["110vh"]}
          bg="darkGray"
          marginTop={"-10vh"}
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 110vh, 0 100vh)",
            zIndex: 1,
            position: "relative",
          }}
          bgImage={"./assets/urbex.jpg"}
          bgPosition={"center"}
          backgroundAttachment="fixed"
        >
          <Element name="projects-section"></Element>
          <Box
            paddingTop={["8vh", "20vh"]}
            marginLeft={["4vw", "8vw"]}
            marginRight={["4vw", "8vw"]}
          >
            <Heading marginBottom={"4vh"}>Projects</Heading>
            <Tabs isFitted variant="unstyled">
              {" "}
              <TabList mb="1em" borderBottom="2px solid" borderColor="gray.200">
                <Tab>Spotify Dashboard</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text
                    className="projectPerex"
                    textAlign={["center"]}
                    marginBottom={["2vh", "4vh"]}
                    fontSize={["14px", "16px"]}
                  >
                    A web application showing my{" "}
                    <Link
                      href="https://spotify-front-end-one.vercel.app"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      Spotify listening stats
                    </Link>
                    .{" "}
                    <Box as="span" display={["none", "inline"]}>
                      <br />
                    </Box>
                    Kind of like Wrapped, but I don’t have to wait until
                    December!
                  </Text>
                  <Flex
                    direction={["column", "row"]}
                    justifyContent={"space-evenly"}
                    alignItems="center"
                  >
                    <Box marginBottom={["2vh", 0]}>
                      <Link
                        href="https://spotify-front-end-one.vercel.app"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          filter="none"
                          transition="transform 0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                            filter: "drop-shadow(0 0 5px white)",
                          }}
                        >
                          <Image
                            src="./assets/spotifyDashboard.png"
                            maxWidth="30vw"
                          ></Image>
                        </Box>
                      </Link>
                    </Box>
                    <Flex
                      width={["100%", "35vw"]}
                      direction="column"
                      justifyContent={"center"}
                      fontSize={["14px", "16px"]}
                    >
                      <UnorderedList styleType="'- '">
                        <ListItem>
                          ETL function deployed on AWS Lambda fetching data from
                          Spotify API every hour
                        </ListItem>
                        <ListItem>
                          Data is stored in BigQuery with SQL analytical layer
                          on top of it
                        </ListItem>
                        <ListItem>
                          Frontend created in React using Chakra UI and
                          Chart.js, backend runs on Python FastAPI
                        </ListItem>
                        <ListItem>
                          Alerts are sent directly to my phone via Telegram
                        </ListItem>
                        <ListItem>
                          Repositories:{" "}
                          <Link
                            href="https://github.com/janmatzek/spotify-backend"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            pipeline
                          </Link>{" "}
                          |{" "}
                          <Link
                            href="https://github.com/janmatzek/sandboxProjects"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            backend
                          </Link>{" "}
                          |{" "}
                          <Link
                            href="https://github.com/janmatzek/spotify-front-end"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            frontend
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </Flex>
                  </Flex>
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
          <Box paddingTop={["15vh", "20vh"]} marginLeft="8vw" marginRight="8vw">
            <Heading marginBottom={"4vh"}>Get in touch!</Heading>
            <Flex width="100%" direction={["column", "row"]}>
              <Flex width={["100%", "50%"]} marginBottom={["4vh", 0]}>
                <Text
                  fontSize={["14px", "16px"]}
                  textAlign={["center", "right"]}
                >
                  Ping me here or hit me up on LinkedIn!
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems={["center", "flex-end"]}
                width={["100%", "50%"]}
                height={"100%"}
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  _placeholder={{ color: "darkGray" }}
                  maxWidth="80%"
                  marginBottom={"2vh"}
                  // alignSelf="flex-end"
                />
                <Textarea
                  placeholder="Your message"
                  _placeholder={{ color: "darkGray" }}
                  maxWidth="80%"
                  marginBottom={"2vh"}
                  // alignSelf="flex-end"
                />
                <Button
                  width="125px"
                  // alignSelf="flex-end"
                  onClick={() => handlePingClick()}
                  isDisabled={buttonDisabled}
                  isLoading={buttonLoading}
                >
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
          bgImage={"./assets/urbex.jpg"}
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
