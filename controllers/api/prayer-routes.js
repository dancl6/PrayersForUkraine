const router = require('express').Router();
const { Prayers } = require('../../models');
const { Op } = require('sequelize');
var Filter = require('bad-words');
var customFilter = new Filter({ placeHolder: '|'});


//POST new prayer
router.post('/', (req, res) => {
    // Check if any profity exists in prayer
    if (!customFilter.clean(req.body.prayer).includes("|") && !customFilter.clean(req.body.name).includes("|")) {
    Prayers.create({
        prayer: req.body.prayer,
        name: req.body.name

    })
        .then(dbPrayerData =>{
            res.json(dbPrayerData)

        })
        .catch(err => res.status(500).json(err));
    } else {
        console.log("Cannot add prayer.")
    }
});

// GET all prayers
router.get('/', (req, res) => {
    Prayers.findAll()
        .then(dbProductData => res.json(dbProductData))
        .catch(err => res.status(500).json(err));
});



//DELETE prayer
router.delete('/:id', (req, res) => {
    Prayers.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(400).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData)
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router