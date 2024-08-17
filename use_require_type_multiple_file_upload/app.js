const express = require("express");
const { upload } = require("./src/FileUpload");
const app = new express();
const cors = require('cors');
app.use(cors());

app.use(express.json({ limit: "500mb" }));

app.post("/upload", upload.array("file", 500), (req, res) => {
    res.send("Success")
})



module.exports = app;