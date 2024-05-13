import { Container, Heading, Text } from "@chakra-ui/react";

const Library = () => {
  return (
    <Container centerContent>
      <Heading as="h2" size="xl" mt={10} mb={6}>Files Library</Heading>
      <Text fontSize="lg">This is the Files Library page.</Text>
    </Container>
  );
};

export default Library;