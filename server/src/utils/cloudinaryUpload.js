const cloudinary = require("../configs/cloudinary");

const cloudinaryUpload = async (img) => {
  return ({ secureUrl } = await cloudinary.uploader.upload(img, {
    folder: "MonalizaBlog",
  }));
};

module.exports = cloudinaryUpload;
