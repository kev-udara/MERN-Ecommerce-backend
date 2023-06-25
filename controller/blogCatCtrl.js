const Category = require("../models/blogCatModel");
const asyncHandler=require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

//Create Category
const createCategory = asyncHandler(async(req,res)=>{
try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
} catch (error) {
    throw new Error(error);
}
});

//Update Category
const updateCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body,{
            new:true
        });
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
})

//Delete Category
const deleteCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a single Category
const getCategory = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const getCategory = await Category.findById(id);
        res.json(getCategory);
    } catch (error) {
        throw new Error(error);
    }
    });

    //Get all Categories
const getAllCategories = asyncHandler(async(req,res)=>{
    try {
        const getCategories = await Category.find();
        res.json(getCategories);
    } catch (error) {
        throw new Error(error);
    }
    });


module.exports=
{
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategories
};