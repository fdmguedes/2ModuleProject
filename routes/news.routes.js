const router = require('express').Router();
const fileUploader = require('../config/cloudinary.config');
const News = require('../models/News.model');
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get('/create', isLoggedIn, (req, res) => res.render('news/create'));

router.post('/create', fileUploader.single('imageUrl'), async (req, res, next) => {
  const { title, description} = req.body;

  try {
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    }

    const createdNews = await News.create({ title, description, imageUrl, author: req.session.currentUser._id });
    
    res.redirect('/news/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/list', isLoggedIn, async (req, res, next) => {
  try {
    const news = await News.find().populate('author');

    res.render('news/list', { news });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    res.render('news/edit', news);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('image'), async (req, res, next) => {
  const { title, description, currentImage } = req.body;
  const { id } = req.params;
  try {
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await News.findByIdAndUpdate(id, { title, description, imageUrl });
   
    res.redirect('/news/list');

  } catch (error) {
    console.log(error);
    next(error);
  }
});


router.get('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await News.findByIdAndDelete(id);
    res.redirect('/news/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;