const News = require("../models/newsModel.js");
const Score = require("../models/socreModel.js");

// Update the image record
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const addNews = async (req, res) => {
  try {
    const newNews = new News({
      image: req.file.path,
      heading: req.body.heading,
      news: req.body.news,
    });

    const savedNews = await newNews.save();

    if (savedNews) {
      res
        .status(201)
        .json({ message: "News added successfully", data: savedNews });
    } else {
      res.status(400).json({ message: "Failed to add news" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

getallNews = async (req, res) => {
  try {
    const allNews = await News.find().limit(3);
    if (allNews) {
      res
        .status(201)
        .json({ message: "News fetched successfully", data: allNews });
    } else {
      res.status(400).json({ message: "Failed to fetched news" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
indNews = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);

    const getNews = await News.findById(id);

    if (getNews) {
      res
        .status(201)
        .json({ message: "News fetched successfully", data: getNews });
    } else {
      res.status(400).json({ message: "Failed to fetched news" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const setScore = async (req, res) => {
  try {
    console.log(req.body);
    
    const {
      Kondotty,
      Areekode,
      Pulikkal,
      Edakkara,
      Nilambur,
      Kolathur,
      ManjeriEast,
      ManjeriWest,
      Perinthalmanna,
      Malappuram,
      Wandoor,
    } = req.body;

    const newScore = {
      Kondotty,
      Areekode,
      Pulikkal,
      Edakkara,
      Nilambur,
      Kolathur,
      ManjeriEast,
      ManjeriWest,
      Perinthalmanna,
      Malappuram,
      Wandoor,
    };

    // Update the document if it exists, otherwise create a new one
    const updatedScore = await Score.findOneAndUpdate(
      {},  // Empty filter to match any document (since there should be only one document in this case)
      newScore,  // Data to update with
      { new: true, upsert: true }  // Options: return the updated document and create if it doesn't exist
    );

    res.status(200).json({message:true});
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getScore=async (req,res)=>{
  try {
    const score = await Score.find({}, { _id: 0,__v:0 });


    console.log(score);
    if(score){
      res.status(200).json({data:score})
    }else{
      res.status(400).json({ message: "Failed to fetched Score" });
    }
    
  } catch (error) {
    res.status(500).json({message:'Server error', error})
  }
}

module.exports = {
  addNews,
  getallNews,
  indNews,
  setScore,
  getScore
};
