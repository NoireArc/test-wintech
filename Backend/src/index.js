
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());
const imageData = require("./wintechData.json");

app.get("/api/images", (req, res) => {
    res.json(imageData.images);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
