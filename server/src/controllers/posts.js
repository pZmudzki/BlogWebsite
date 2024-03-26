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
    const { id } = req.params;
    let posts;
    if (id === "latest") {
      posts = await Post.find().sort({ createdAt: -1 }).limit(1);
      return res.status(200).json(posts[0]);
    }
    posts = await Post.findOne({ _id: id });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

const getPosts = async (req, res) => {
  try {
    const { type } = req.params;
    let posts;
    if (type === "all") {
      posts = await Post.find();
      return res.status(200).json(posts);
    }
    posts = await Post.find({ type: type });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: "Błąd w pobieraniu treści" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, type, archived } = req.body;
    let imagesBuffer = [];
    console.log(archived);
    let postContent = {
      title,
      content,
      type,
      archived,
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

    const updatedPost = await Post.findByIdAndUpdate(id, postContent, {
      new: true,
    });
    console.log(updatedPost);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ error: "Błąd w aktualizacji treści" });
  }
};

module.exports = { getPost, getPosts, addPost, updatePost };
