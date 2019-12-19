
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

const word = lorem.generateWords(5);
const sentence = lorem.generateSentences(5);
const paragraph = lorem.generateParagraphs(3);



var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var randomCompanyName = faker.company.companyName();
var randomCommerceProduct = faker.commerce.product();
var randomCommerceName = faker.commerce.productName();
var randomCommercePrice = faker.commerce.price();
var randomImagePeople = faker.image.people();


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: "Impromptu",
    info: paragraph,
    email: randomEmail,
    name: randomName,
    companyName: randomCompanyName,
    product: randomCommerceProduct,
    productName: randomCommerceName,
    productPrice: randomCommercePrice,
    people: randomImagePeople,
  }
  );
});


module.exports = router;