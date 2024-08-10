const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    image: { type: String, default: "defaultImage.jpg" },
    heading: { type: String, default: "Default Heading" },
    news: { type: String, default: "Default news content" }
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

module.exports = News;
