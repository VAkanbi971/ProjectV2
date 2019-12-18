
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
// configuration for lib
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const word = lorem.generateWords(1);
const sentence = lorem.generateSentences(5);
const paragraph = lorem.generateParagraphs(7);

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: word});
});

module.exports = router;

