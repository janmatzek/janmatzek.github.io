import {
  Box,
  Flex,
  Heading,
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
import { Element } from "react-scroll";

function Projects() {
  return (
    <>
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
                Kind of like Wrapped, but I don’t have to wait until December!
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
                      Data is stored in BigQuery with SQL analytical layer on
                      top of it
                    </ListItem>
                    <ListItem>
                      Frontend created in React using Chakra UI and Chart.js,
                      backend runs on Python FastAPI
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
                      Splits an image into a grid based on user input and saves
                      the outputs. Has option to apply white top and bottom
                      borders
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
    </>
  );
}

export default Projects;
