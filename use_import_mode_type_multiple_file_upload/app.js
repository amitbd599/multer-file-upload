import express from "express";
import cors from "cors";
import upload from "./src/middleware/FileUpload.js";

const app = new express();
app.use(cors());

app.use(express.json({ limit: "500mb" }));

app.post("/upload", upload.array("file", 500), (req, res) => {
  res.send("Success");
});

app.use("/uploads", express.static("uploads"));

export default app;
