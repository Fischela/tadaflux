const Sub = require("../model/sub")
const slugify = require("slugify")

exports.CreateSub = async (req, res) => {
   //
   console.log("REQIES",req.body, req.headers)
   try{res.json(await new Sub({
      name:req.body.name,
      slug:slugify(req.body.name),
      parent:req.body.parent
   }).save())}
   catch(err){
      console.log(err)
      res.status(400).send("Unable to create Category")
   }
}

exports.ReadSub = async (req, res) => {
    //
   res.json(await Sub.findOne({slug:req.params.slug})) 
 }
 
 exports.listSub = async (req, res) => {
    //
    res.json(await Sub.find())
 }

 exports.listSubSpec = async (req, res) => {
   //
   console.log("HERE WE ARE", req.body)
   const datsi = await Sub.find({parent:req.body._id})
   console.log(datsi)
   res.json(datsi)
}
 exports.UpdateSub = async (req, res) => {
   //
   try{
      res.json(await Sub.findOneAndUpdate({slug:req.body.slug},
          {name: req.body.name,parent:req.body.parent, slug:slugify(req.body.name)
      }, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

exports.DeleteSub = async (req, res) => {
   //
   try{
   res.json(await Sub.deleteOne({slug:req.body.slug}))
   }
   catch(err){
      res.status(400).send(err)
   }
}