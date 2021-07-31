const Product = require("../model/product")
const slugify = require("slugify")

exports.CreateProduct = async (req, res) => {
   //
   console.log("REQIES", req.body)
   req.body.slug = slugify(req.body.name)
   try{res.json(await new Product(req.body).save())}
   catch(err){
      console.log(err)
      res.status(400).send("Unable to create Product")
   }
}

exports.ReadProduct = async (req, res) => {
    //
    console.log(req.params)
    const prod = await Product.findOne({slug:req.params.slug})
    console.log(prod)
   res.json(prod) 
 }
 
 exports.listProduct = async (req, res) => {
    //
    res.json(await Product.find().populate('Category').populate('Sub').exec())
 }
 exports.UpdateProduct = async (req, res) => {
   //
   try{
      console.log("THIS IS FROM THE PRODUCT UPDATE",req.body)
      req.body.slug = slugify(req.body.name)
      res.json(await Product.findOneAndUpdate({_id:req.body._id},
          req.body, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

exports.DeleteProduct = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Product.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}