const express = require('express');
const router = express.Router();

const  ContactController = require('../app/Controller/ContactController');
const PostController = require('../app/Controller/PostController');
const NewsletterController = require('../app/Controller/NewsLetterController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressApp' });
});

router.get('/contact',ContactController.index);

router.get('/post', PostController.index);
router.get('/post/:slug', PostController.show);

router.get('/contact',ContactController.index);
router.post('/contact-save',ContactController.store);
router.post('/save-newsletter', NewsletterController.store);



module.exports = router;
