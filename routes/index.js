var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(request, response, next){
  let number = Math.random()
  response.render('home', {title: 'Home', message:'this is a dynamic page', number})
})
module.exports = router;
