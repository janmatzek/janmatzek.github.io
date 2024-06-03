import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, transition } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "react-scroll";

const colors = {
  darkGray: "#272727",
  lightGray: "#727272",
  white: "#FFFFFF",
};

const components = {
  Tabs: {
    baseStyle: {
      tab: {
        _hover: {
          backgroundColor: "transparent",
          borderWidth: "0px",
          textDecoration: "underline",
        },
        _selected: {
          borderRadius: "0px",
          borderWidth: "0px",
          // textDecoration: "underline", // uncommment when there are more tabs :)
        },
        _focus: {
          boxShadow: "none",
          outline: "none",
        },
      },
    },
  },
  Input: {
    variants: {
      outline: {
        field: {
          _focus: {
            borderColor: "white",
            boxShadow: "none",
          },
        },
      },
    },
  },
  Textarea: {
    variants: {
      outline: {
        _focus: {
          borderColor: "white",
          boxShadow: "none",
        },
      },
    },
  },
  Button: {
    baseStyle: {
      _hover: {
        borderColor: "darkGray",
        borderWidth: "4px",
      },
    },
  },
};

const fonts = {
  heading: "Roboto Mono, monospace",
  body: "Roboto Mono, monospace",
};

const styles = {
  global: {
    body: {
      color: "white", // Set default text color
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
