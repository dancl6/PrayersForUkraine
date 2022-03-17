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

//Login route/render
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render('login');
// });

//Sign-up page
router.get('/prayers', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('submit-prayer');
});

//Products page
// router.get('/products', (req, res) => {
//     Product.findAll({
//         attributes: ['id', 'product_name', 'price', 'stock', 'image', 'category_id'],
//         include: {
//             model: Category,
//             attributes: ['id', 'category_name']
//         }
//     })
//     .then(dbPostData => {
//         const products = dbPostData.map(products => products.get({ plain: true }));

//         console.log(products)

//         let loginStatus;

//         if (typeof req.session.passport != 'undefined') {
//             loginStatus = req.session.passport.user.id;
//         } else {
//             loginStatus = false;
//         }

//         res.render('product-list', {
//             products, 
//             loggedIn: loginStatus
//         })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err)
//     });
// });

module.exports = router;