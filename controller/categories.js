const Category = require("../model/category")
const slugify = require("slugify")

exports.Create = async (req, res) => {
   //
   console.log("REQIES",req.body, req.headers)
   try{res.json(await new Category({
      name:req.body.name,
      slug:slugify(req.body.name)
   }).save())}
   catch(err){
      console.log(err)
      res.status(400).send("Unable to create Category")
   }
}

exports.Read = async (req, res) => {
    //
   res.json(await Category.findOne({slug:req.params.slug})) 
 }
 
 exports.list = async (req, res) => {
    //
    res.json(await Category.find())
 }
 exports.Update = async (req, res) => {
   //
   try{
      res.json(await Category.findOneAndUpdate({slug:req.body.slug},
          {name: req.body.name, slug:slugify(req.body.name)
      }, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

exports.Delete = async (req, res) => {
   //
   try{
   res.json(await Category.deleteOne({slug:req.body.slug}))
   }
   catch(err){
      res.status(400).send(err)
   }
}