import { Box, Text } from "rebass";
import Link from "./link";

const Project = ({ project }) => (
  <Box my={4}>
    <Link href={project.link}>{project.name}</Link>

    <Text as="p" mb={0}>
      {project.description}
    </Text>
  </Box>
);

const Projects = ({ list }) =>
  list.map(project => <Project project={project} />);

export default Projects;
