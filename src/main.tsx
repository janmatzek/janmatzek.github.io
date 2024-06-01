import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  darkGray: "#272727",
  lightGray: "#727272",
  white: "#FFFFFF",
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

const theme = extendTheme({ colors, fonts, styles });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
