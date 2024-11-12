const express = require("express");
const multer = require("multer");

const app = express();
const cors = require("cors");
app.use(cors());

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Set the filename of the uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create Multer instance with the configured storage
const upload = multer({ storage: storage });

// Example file upload route
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});

app.use("/uploads", express.static("uploads"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
