import "./App.css";
import IntroductionPage from "./content/01_intro.tsx";
import AboutMe from "./content/02_about.tsx";
import Projects from "./content/03_projects.tsx";
import Contact from "./content/04_contact.tsx";
import Footer from "./content/05_footer.tsx";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box className="app-wrapper">
        <Flex
          className="intro pageDark"
          height={["100vh"]}
          minHeight={["100vh", "820px"]}
          direction={["column", "row"]}
          justifyContent={["space-evenly", "center)"]}
        >
          <IntroductionPage />
        </Flex>
        <Flex
          className="aboutMe pageLight"
          height={["90vh"]}
          minHeight={["90vh", "720px"]}
          justifyContent={"space-between"}
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 90vh, 0 80vh)",
            zIndex: 2,
            position: "relative",
          }}
        >
          <AboutMe />
        </Flex>

        <Box
          className="projects"
          width="100vw"
          height="90vh"
          minHeight={["110vh", "890px", "1140px"]}
          bg="darkGray"
          marginTop="-20vh"
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 110vh, 0 100vh)",
            zIndex: 1,
            position: "relative",
          }}
          bgImage={"./assets/urbex.jpg"}
          bgPosition={"center"}
          backgroundAttachment="fixed"
        >
          <Projects />
        </Box>
        <Box
          className="contact pageLight"
          height={["60vh"]}
          // minHeight={["70vh", "620px", "920px"]}
          marginTop={["-15vh"]}
          // marginTop={["-10vh", "-120px", "-150px"]}
          // marginTop={["-10vh", "-20vh", "-40vh"]}
        >
          <Contact />
        </Box>
        <Box
          className="footer"
          width="100vw"
          height={["20vh", "150px"]}
          bgImage={"./assets/urbex.jpg"}
          bgPosition={"bottom"}
          backgroundAttachment="fixed"
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
