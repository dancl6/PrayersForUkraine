const router = require('express').Router();
const sequelize = require('../config/connection');
const { Op } = require('sequelize');

const {
    Prayers
} = require('../models');

router.get('/', (req, res) => {
    Prayers.findAll({

        })
        .then(dbPostData => {

            let parsePost = JSON.parse(JSON.stringify(dbPostData));
  
            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle...
                while (currentIndex != 0) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
              
                return array;
              }



              shuffle(parsePost);

            console.log("parse post on st pattys day is:", parsePost)
            res.render('homepage', {
                parsePost
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



//Submit Prayer Page
router.get('/prayers', (req, res) => {

    res.render('submit-prayer');
});


module.exports = router;