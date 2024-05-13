import { Container, Heading, Text } from "@chakra-ui/react";

const Chat = () => {
  return (
    <Container centerContent>
      <Heading as="h2" size="xl" mt={10} mb={6}>AI Chat Interface</Heading>
      <Text fontSize="lg">This is the AI Chat Interface page.</Text>
    </Container>
  );
};

export default Chat;