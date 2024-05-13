import { Container, Heading, Text, VStack, Box, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaRobot } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" mb={4}>Dashboard</Heading>
        <Text fontSize="lg" textAlign="center">
          Access your files library and interact with the AI chat interface.
        </Text>
        <HStack spacing={6}>
          <Button leftIcon={<FaFileAlt />} colorScheme="teal" size="lg" onClick={() => navigate('/library')}>
            Files Library
          </Button>
          <Button leftIcon={<FaRobot />} colorScheme="blue" size="lg" onClick={() => navigate('/chat')}>
            AI Chat Interface
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Dashboard;