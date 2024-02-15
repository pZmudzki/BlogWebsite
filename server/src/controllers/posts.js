const Post = require("../models/postSchema");
const cloudinaryUpload = require("../utils/cloudinaryUpload");

const addPost = async (req, res) => {
  try {
    let imagesBuffer = [];

    let postContent = {
      type: req.body.type,
      title: req.body.title,
      content: req.body.content,
    };

    if (req.body.img) {
      let images = [...req.body.img];
      for (let i = 0; i < images.length; i++) {
        const { secure_url } = await cloudinaryUpload(images[i]);
        imagesBuffer.push(secure_url);
      }
      postContent.imageUrl = imagesBuffer;
    }
    if (req.body.videoUrl) postContent.videoUrl = req.body.videoUrl;

    const newPost = await Post.create(postContent);

    res
      .status(201)
      .json({ message: "Pomyślnie dodano nowy post!", post: newPost });
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ error: "Błąd w dodawaniu treści" });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.query;
    const posts = await Post.findOne({ _id: id });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

const getPosts = async (req, res) => {
  try {
    const { type } = req.params;
    const posts = await Post.find({ type: type });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

module.exports = { getPost, getPosts, addPost };
