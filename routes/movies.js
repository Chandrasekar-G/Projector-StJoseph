var express = require('express');
var router = express.Router();
var movies = require("../mock/movieData");

router.get('/all', function(req, res){
  return res.json(movies);
});


router.post('/add', function(req, res){
  var movie = req.body;
  console.log(movie);
  return res.json({
      isSuccess: true,
  });
});

router.get('/:movieName', function(req, res){
  console.log(req.params.movieName);
  return res.json({
      isSuccess: true,
  });
});

module.exports = router;
