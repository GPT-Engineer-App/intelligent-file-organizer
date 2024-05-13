import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const NavigationMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">AI File Organizer</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Button as={RouterLink} to="/" variant="link" color="white">Home</Button>
            <Button as={RouterLink} to="/upload" variant="link" color="white">Upload</Button>
            <Button as={RouterLink} to="/organize" variant="link" color="white">Organize</Button>
            <Button as={RouterLink} to="/analyze" variant="link" color="white">Analyze</Button>
            <Button as={RouterLink} to="/dashboard" variant="link" color="white">Dashboard</Button>
            <Button as={RouterLink} to="/library" variant="link" color="white">Library</Button>
            <Button as={RouterLink} to="/chat" variant="link" color="white">Chat</Button>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Button as={RouterLink} to="/" variant="link" color="white" onClick={onClose}>Home</Button>
            <Button as={RouterLink} to="/upload" variant="link" color="white" onClick={onClose}>Upload</Button>
            <Button as={RouterLink} to="/organize" variant="link" color="white" onClick={onClose}>Organize</Button>
            <Button as={RouterLink} to="/analyze" variant="link" color="white" onClick={onClose}>Analyze</Button>
            <Button as={RouterLink} to="/dashboard" variant="link" color="white" onClick={onClose}>Dashboard</Button>
            <Button as={RouterLink} to="/library" variant="link" color="white" onClick={onClose}>Library</Button>
            <Button as={RouterLink} to="/chat" variant="link" color="white" onClick={onClose}>Chat</Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavigationMenu;