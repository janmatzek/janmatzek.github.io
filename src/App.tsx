import { useEffect, useState } from "react";
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

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const frogEndpoint =
    "https://zvkbxcw6va.execute-api.us-east-1.amazonaws.com/dev/contact_form";

  const [buttonLoading, setButtonLoading] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const handleEmailChange = (event) => setEmailValue(event.target.value);

  const [messageValue, setMessageValue] = useState("");
  const handleMessageChange = (event) => setMessageValue(event.target.value);

  const [pingMeCaption, setPingMeCaption] = useState("Ping me!");

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (messageSent) {
      setButtonDisabled(true);
    }
  }, [messageSent]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (messageSent == true) {
      setButtonDisabled(true);
    } else if (emailRegex.test(emailValue) && messageValue !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [emailValue, messageValue, messageSent]);

  const handlePingClick = () => {
    setButtonDisabled(true);
    setButtonLoading(true);
    (async () => {
      const rawResponse = await fetch(frogEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact_info: emailValue,
          message: messageValue,
        }),
      });
      const response = await rawResponse.json();
      if (response.message == "success") {
        setButtonLoading(false);
        setButtonDisabled(true);
        setPingMeCaption("Sent!");
        setMessageSent(true);
        setEmailValue("");
        setMessageValue("Thank you for your message!");
        setTimeout(() => {
          setMessageValue("");
          setButtonDisabled(false);
          setMessageSent(false);
          setPingMeCaption("Ping me!");
        }, 5000);
      } else {
        setButtonLoading(false);
        setButtonDisabled(false);
        setPingMeCaption("Try again :(");
      }
    })();
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
      <Box className="app-wrapper" width="100vw" bg="black">
        <Flex
          className="introPage"
          width="100%"
          height={["100vh", "820px"]}
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
          height={["90vh", "720px"]}
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
          height={["110vh", "890px"]}
          bg="darkGray"
          marginTop={["-10vh", "-100px"]}
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
                <Tab>Image Splitter</Tab>
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
                <TabPanel>
                  <Text
                    className="projectPerex"
                    textAlign={["center"]}
                    marginBottom={["2vh", "4vh"]}
                    fontSize={["14px", "16px"]}
                  >
                    A web app to help me automate image edits before posting on
                    Instagram.{" "}
                    <Box as="span" display={["none", "inline"]}>
                      <br />
                    </Box>
                    Keeping my feed nice and tidy is now easier than ever!
                  </Text>
                  <Flex
                    direction={["column", "row"]}
                    justifyContent={"space-evenly"}
                    alignItems="center"
                  >
                    <Box marginBottom={["2vh", 0]}>
                      <Link
                        href="https://image-splitter.janmatzek.com"
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
                            src="./assets/instagram.png"
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
                          Splits an image into a grid based on user input and
                          saves the outputs. Has option to apply white top and
                          bottom borders
                        </ListItem>
                        <ListItem>
                          Functionality wrapped around Pillow library automate
                          common image edits.
                        </ListItem>
                        <ListItem>
                          <Link
                            href="https://github.com/janmatzek/image-splitter-web-app"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            Frontend
                          </Link>{" "}
                          created in React using Chakra UI,{" "}
                          <Link
                            href="https://github.com/janmatzek/instagram-image-splitter"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            backend
                          </Link>{" "}
                          runs on Python FastAPI
                        </ListItem>
                        <ListItem>
                          Also available as a CLI, can be installed via pip
                        </ListItem>
                        <ListItem>
                          <Link
                            href="https://image-splitter.janmatzek.com"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            Web App
                          </Link>{" "}
                          |{" "}
                          <Link
                            href="https://github.com/janmatzek/instagram-image-splitter"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </Link>{" "}
                          |{" "}
                          <Link
                            href="https://pypi.org/project/insta-splitter/"
                            target="blank"
                            rel="noopener noreferrer"
                          >
                            PyPI
                          </Link>{" "}
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
          height={["70vh", "620px"]}
          bg="lightGray"
          marginTop={["-10vh", "-120px"]}
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
                  value={emailValue}
                  placeholder="Your email"
                  _placeholder={{ color: "darkGray" }}
                  maxWidth="80%"
                  marginBottom={"2vh"}
                  onChange={handleEmailChange}
                />
                <Textarea
                  value={messageValue}
                  placeholder="Your message"
                  _placeholder={{ color: "darkGray" }}
                  maxWidth="80%"
                  marginBottom={"2vh"}
                  onChange={handleMessageChange}
                />
                <Button
                  width="125px"
                  onClick={() => handlePingClick()}
                  isDisabled={buttonDisabled}
                  isLoading={buttonLoading}
                >
                  {pingMeCaption}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          className="footer"
          width="100vw"
          height={["20vh", "150px"]}
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
