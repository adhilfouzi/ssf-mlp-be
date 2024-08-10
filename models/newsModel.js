const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  image: { type: String, default: "defaultImage.jpg" },
    heading: { type: String, default: "light" },
    news: { type: String, default: "adfjkadsfjkal" }
});


const News = mongoose.model("News", NewsSchema);

module.exports = News;
