import { useState } from "react";
import { Container, Heading, Text, Input, Button, VStack } from "@chakra-ui/react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully!");
      } else {
        setUploadStatus("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred while uploading the file.");
    }
  };

  return (
    <Container centerContent>
      <Heading as="h2" size="xl" mt={10} mb={6}>Upload Files</Heading>
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="teal" onClick={handleUpload}>Upload</Button>
        {uploadStatus && <Text>{uploadStatus}</Text>}
      </VStack>
    </Container>
  );
};

export default Upload;