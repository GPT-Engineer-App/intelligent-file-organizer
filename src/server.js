const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(fileUpload());

// Upload endpoint
app.post("/api/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const uploadedFile = req.files.file;
  const uploadPath = path.join(__dirname, "uploads", uploadedFile.name);

  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.send("File uploaded!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});