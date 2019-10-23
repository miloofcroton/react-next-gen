import { Box, Text } from "rebass";

const Changelog = ({ details }) => (
  <Text as="details" fontFamily="monospace">
    <summary>
      <strong>Changelog</strong>
    </summary>

    {details.map((detail, index) => {
      const key = detail[0];
      const changes = detail.slice(1);
      return (
        <Box ml={0} mt={2} key={index}>
          <Text as="p" mb={0}>
            {key}:
          </Text>
          <Box as="ul" my={2}>
            {changes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Box>
        </Box>
      );
    })}
  </Text>
);

export default Changelog;
