const express = require("express");
const
    { 
        createBrand, 
        updateBrand,
        deleteBrand,
        getBrand,
        getAllBrands
    } = require("../controller/brandCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createBrand);
router.put('/:id',authMiddleware,isAdmin,updateBrand);
router.delete('/:id',authMiddleware,isAdmin,deleteBrand);
router.get('/:id',authMiddleware,isAdmin,getBrand);
router.get('/',authMiddleware,isAdmin,getAllBrands);


module.exports = router;
