
const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, path.join(__dirname, "../public/results"));
//   },
//   filename: function (req, file, callback) {
//     const name = Date.now() + "-" + file.originalname;
//     callback(null, name);
//   },
// });

// const uploadProduct = multer({ storage: storage });

// const productImagesUpload = uploadProduct.fields([
//   { name: 'image1', maxCount: 1 },
//   { name: 'image2', maxCount: 1 },
//   { name: 'image3', maxCount: 1 },
 
// ]);

// module.exports={
//     productImagesUpload
// }







const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary.js'); // Ensure this path is correct

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'malappuramEast', // Adjust as needed
    allowed_formats: ['jpg', 'jpeg', 'png'] // Adjust formats if needed
  }
});

const uploadProduct = multer({ storage: storage });

const productImagesUpload = uploadProduct.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
 
]);
const newsstorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'newsImages', // Adjust as needed
    allowed_formats: ['jpg', 'jpeg', 'png'] // Adjust formats if needed
  }
});

const newsUpload = multer({ storage: newsstorage });

// Change to single image upload
const NewsImageUpload = newsUpload.single('image');


module.exports={
    productImagesUpload,
    NewsImageUpload
}




