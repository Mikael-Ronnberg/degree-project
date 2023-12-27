import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dela-gothic-one";
import "@fontsource/poppins/";
export const colors = {
  brand: {
    blue: "#1E42D4",
    green: "#01D589",
    yellow: "#EAA83A",
    purple: "#574CFF",
    darkPink: "#FC7E89",
    pink: "#F8DBDF",
    red: "#F74D4D",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Dela Gothic One', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
