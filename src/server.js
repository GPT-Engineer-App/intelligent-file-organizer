const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload());
app.use(express.json());

// Google Cloud Natural Language API setup
const language = google.language({
  version: "v1",
  auth: "[API_KEY]",
});

// Upload endpoint
app.post("/api/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const uploadedFile = req.files.file;
  const uploadPath = path.join(__dirname, "uploads", uploadedFile.name);

  uploadedFile.mv(uploadPath, async (err) => {
    if (err) {
      console.error("File move error:", err);
      return res.status(500).send("Error moving the file.");
    }

    try {
      const content = fs.readFileSync(uploadPath, "utf8");
      const document = {
        content: content,
        type: "PLAIN_TEXT",
      };

      const [result] = await language.documents.analyzeSentiment({ document });
      const sentiment = result.documentSentiment;

      res.json({ analysis: `Sentiment score: ${sentiment.score}, Sentiment magnitude: ${sentiment.magnitude}` });
    } catch (error) {
      console.error("Error analyzing file:", error);
      res.status(500).send("An error occurred while analyzing the file.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});