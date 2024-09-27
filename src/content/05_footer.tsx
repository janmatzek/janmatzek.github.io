import { Box, Flex, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
