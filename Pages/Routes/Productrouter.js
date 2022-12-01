const router = require("express").Router();
const ProductController = require('../Controllers/Productcontroller')


router.post("/",ProductController.createProduct)
router.get('/Allproducts', ProductController.getProducts)
module.exports = router