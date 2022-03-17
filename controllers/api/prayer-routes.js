const router = require('express').Router();
const { Prayers } = require('../../models');
const { Op } = require('sequelize');

//GET all products


//GET single product
// router.get('/:id', (req, res) => {
//     Prayers.findOne({
//         where:

//         {
//             id: req.params.id
//         },
//         attributes: ['id', 'product_name', 'price', 'stock', 'image', 'category_id'],
//         include:
//             [
//                 {
//                     model: Category,
//                     attributes: ['id', 'category_name']
//                 },
//                 {
//                     model: Product_Profit,
//                     attributes: ['id', 'num_sold', 'cost', 'product_id']
//                 }
//             ]
//     })
//         .then(dbProductData => {
//             if (!dbProductData) {
//                 res.status(400).json({ message: 'No product found with this id' });
//                 return
//             }
//             console.log("i am at db Product Data")
//             console.log(dbProductData)
//             res.json(dbProductData)
//         })
//         .catch(err => res.status(500).json(err));
// });

//POST new product
router.post('/', (req, res) => {
    Prayers.create({
        prayer: req.body.prayer,
        name: req.body.name
        // price: req.body.price,
        // stock: req.body.price,
        // category_id: req.body.category_id
    })
        .then(dbPrayerData => res.json(dbPrayerData))
        .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
    Prayers.findAll()
        .then(dbProductData => res.json(dbProductData))
        .catch(err => res.status(500).json(err));
});


//PUT update product
// router.put('/:id', (req, res) => {
//     Product.update(
//         {
//             stock: req.body.stock
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbProductData => res.json(dbProductData))
//         .catch(err => res.status(500).json(err));
// });

// router.put('/sold/:id', (req, res) => {
//     Product_Profit.update(
//         {
//             num_sold: req.body.num_sold
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbProductData => res.json(dbProductData))
//         .catch(err => res.status(500).json(err));
// });

//DELETE product
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