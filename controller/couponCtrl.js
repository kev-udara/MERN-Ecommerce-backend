const Coupon = require("../models/couponModel");
const validateMongoDbId = require('../utils/validateMongodbid');
const asyncHandler=require("express-async-handler");

//Create coupon
const createCoupon = asyncHandler(async(req,res)=>{
try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
} catch (error) {
    throw new Error(error);
}

});

//Get all coupons
const getAllCoupons = asyncHandler(async(req,res)=>{
    try {
        const getallcoupons = await Coupon.find();
        res.json(getallcoupons);
    } catch (error) {
        throw new Error(error);
    }
});

//Update coupon
const updateCoupon = asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        validateMongoDbId(id);
        const updatedCoupon = await Coupon.findByIdAndUpdate(id,req.body,
            {new:true});
            res.json(updatedCoupon)
    } catch (error) {
        throw new Error(error);
    }
});

//Delete coupon
const deleteCoupon = asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        validateMongoDbId(id);
        const deletedCoupon = await Coupon.findByIdAndDelete(id);
        res.json(deletedCoupon)
    } catch (error) {
        throw new Error(error);
    }
});

module.exports=
{
    createCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon
};