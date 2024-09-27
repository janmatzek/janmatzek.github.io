import { Flex, Heading, Button, Text, Image, Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

function AboutMe() {
  return (
    <>
      <Image
        src="./assets/profilePic.JPG"
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
          <p>
            I studied economics, but eventually I found my way to tech. You can
            have a look at my CV or check out some of the stuff I made.
          </p>
          <p>Stack: Python, Linux, SQL, NoSQL, GCP, AWS, React, TypeScript</p>
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
    </>
  );
}

export default AboutMe;
