import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
  colors: {
    primaryColor: "#330693",
    secondaryColor: "#8A53FF",
    greyColor: "#20292E",
  },
  fonts: {
    body: `Poppins`,
    html: `Poppins`,
  },
});
