const express = require('express');
const fileUploader = require('../config/cloudinary.config');
const router = express.Router();
const User = require("../models/User.model");
const isLoggedIn = require('../middleware/isLoggedIn.js')


    router.get('/', isLoggedIn, async (req, res, next) => {
      const userId = req.session.currentUser._id
        try {
          const user = await User.findById(userId);
          res.render('profile/profile', user);
        } catch (error) {
          console.log(error);
          next(error);
        }
      });

router.get('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.render('profile/edit',user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.post('/edit/:id', fileUploader.single('image'), async (req, res, next) => {
    const { username, ocupation, currentImage } = req.body;
    const { id } = req.params;
    try {
      let image;
  
      if (req.file) {
        image = req.file.path;
      } else {
        image = currentImage;
      }
  
      await User.findByIdAndUpdate(id, { username, ocupation, image });
     
      res.redirect('/profile');
  
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
 

module.exports = router;