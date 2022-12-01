const router = require("express").Router();
const Cartcontroller = require('../Controllers/Cartcontroller')

router.post("/",Cartcontroller.createcart)
router.get('/myorder',Cartcontroller.getmycart)
module.exports = router