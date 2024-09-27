import "../App.css";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { keyframes, css } from "@emotion/react";

function IntroductionPage() {
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
      <Flex
        direction="column"
        justifyContent={"center"}
        width={["100vw", "50vw"]}
        padding={["4vw", "8vw"]}
      >
        <Heading color="white" css={useBlurInAnimation("1s")}>
          Hello world.
        </Heading>
      </Flex>
      <Flex
        direction="column"
        justifyContent="end"
        width={["100vw", "50vw"]}
        padding={["4vw", "8vw"]}
      >
        <Text
          textAlign={"right"}
          css={useBlurInAnimation("1.5s")}
          fontSize={["14px", "16px"]}
        >
          My name is Jan. I write code,
          <br />
          play music and make charts.
        </Text>
      </Flex>
    </>
  );
}

export default IntroductionPage;
