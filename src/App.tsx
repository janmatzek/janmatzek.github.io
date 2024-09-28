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
        {/* Introduction Section */}
        <Flex
          className="intro pageDark"
          height="100vh"
          minHeight="820px"
          direction={["column", "row"]}
          justifyContent={["space-evenly", "center"]}
        >
          <IntroductionPage />
        </Flex>

        {/* About Me Section */}
        <Flex
          className="aboutMe pageLight"
          height="90vh"
          minHeight="720px"
          justifyContent="space-between"
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 90vh, 0 80vh)",
            zIndex: 2,
            position: "relative",
          }}
        >
          <AboutMe />
        </Flex>

        {/* Projects Section */}
        <Box
          className="projects"
          width="100vw"
          height="110vh"
          minHeight="890px"
          bg="darkGray"
          marginTop="-15vh"
          style={{
            clipPath: "polygon(0 0, 100vw 0, 100vw 110vh, 0 100vh)",
            zIndex: 1,
            position: "relative",
          }}
          bgImage={"./assets/urbex.jpg"}
          bgPosition="center"
          backgroundAttachment="fixed"
        >
          <Projects />
        </Box>

        {/* Contact Section */}
        <Box
          className="contact pageLight"
          height="70vh"
          minHeight={["820px", "620px"]}
          marginTop={["-20vh", "-15vh"]}
        >
          <Contact />
        </Box>

        {/* Footer Section */}
        <Box
          className="footer"
          width="100vw"
          height="150px"
          bgImage={"./assets/urbex.jpg"}
          bgPosition="bottom"
          backgroundAttachment="fixed"
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
