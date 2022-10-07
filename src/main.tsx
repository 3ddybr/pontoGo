import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./Router";

import { theme } from "./styles/theme";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
