import express from "express";
import cors from "cors";
import upload from "./src/middleware/FileUpload.js";

const app = new express();
app.use(cors());

app.use(express.json({ limit: "500mb" }));

app.post("/upload", upload.array("file", 20), (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      file: req.files,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Server Error");
  }
});

app.use("/uploads", express.static("uploads"));

export default app;
