import { Container, Text, VStack, Heading, Box, Button, IconButton } from "@chakra-ui/react";
import { FaUpload, FaFolderOpen, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" mb={4}>AI-Powered File Organizer</Heading>
        <Text fontSize="lg" textAlign="center">
          Upload, categorize, and analyze your documents with AI. Correlate information across files and databases for investigative purposes.
        </Text>
        <Box>
          <Button leftIcon={<FaUpload />} colorScheme="teal" size="lg" mb={4}>
            Upload Files
          </Button>
          <Button leftIcon={<FaFolderOpen />} colorScheme="blue" size="lg" mb={4}>
            Organize Files
          </Button>
          <Button leftIcon={<FaSearch />} colorScheme="purple" size="lg">
            Analyze Content
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;