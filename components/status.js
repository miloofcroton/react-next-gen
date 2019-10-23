import { Text, Box } from "rebass";

const Status = props => {
  const { status } = props;
  const colors = {
    Draft: {
      bg: "#bdc3c7",
      fg: "#333"
    },

    "In Progress": {
      bg: "#2980b9",
      fg: "#000"
    },

    Finished: {
      bg: "#27ae60",
      fg: "#000"
    }
  };

  return (
    <Text as="p" {...props}>
      <Box
        as="span"
        p={1}
        bg={colors[status]["bg"]}
        color={colors[status]["fg"]}
        fontSize={0}
        sx={{ borderRadius: ".2em" }}
      >
        {status}
      </Box>
    </Text>
  );
};
export default Status;
