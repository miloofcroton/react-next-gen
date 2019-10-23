import { Box } from "rebass";

const Container = ({ children }) => (
  <Box
    maxWidth="45rem"
    mx="auto"
    px={4}
  >
    {children}
  </Box>
);

export default Container;
