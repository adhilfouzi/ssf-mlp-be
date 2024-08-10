const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const PORT = 3000 || process.env.PORT;
const multer = require("./util/mutler.js");
const newsCon = require("./Controller/News.js");
const dataController = require("./Controller/getAndPost.js");

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//middleware to parse to json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", dataController.getData);
app.post("/imageUpload", multer.productImagesUpload, dataController.addImage);
app.get("/showImage", dataController.showImage);
app.get("/allresult", dataController.allResult);
app.post("/addnews", multer.NewsImageUpload, newsCon.addNews);
app.get("/allnews", multer.NewsImageUpload, newsCon.getallNews);
app.get("/indnews", multer.NewsImageUpload, newsCon.indNews);
app.post("/setscore", multer.NewsImageUpload, newsCon.setScore);
app.get("/getscore", newsCon.getScore);

app.post("/data", dataController.postData);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
0;
