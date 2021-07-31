const Order = require("../model/order")
const slugify = require("slugify");
const product = require("../model/product");

exports.CreateOrder = async (req, res) => {
   //
//    name
// ProductId
// BuyerId
// description
// price
// color
// brand
// qty
// location
// expiry
// timeOfOrder
console.log("THIS IS THE HEADER FOR CREATE PRODUCTS", req.headers)
   let productL = req.body.products.length;
   let productList = req.body.products
   for (let count=0; count<productL; count++){
      try{
      await new Order({name:productList[count].name,
                  productId:productList._id,
               BuyerId:productList[count].BuyerId,
               description:productList[count].description,
               price:productList[count].price,
               color:productList[count].color,
               brand:productList[count].brand,
               qty:productList[count].qty,
               location:productList[count].location,
               expiry:productList[count].expiry}).save()
      console.log(productList[count])}
      catch(err){
         // console.log(err)
         console.log(err)
      }
   }
   res.send("Order successfully received!")

//    req.body.slug = slugify(req.body.name)
   // try{res.json(await new Order(req.body).save())}
   // catch(err){
   //    console.log(err)
   //    res.status(400).send("Unable to create Product")
   // }
}

exports.ReadOrder = async (req, res) => {
    //
    console.log(req.params)
    const prod = await Order.findOne({slug:req.params.id})
    console.log(prod)
   res.json(prod) 
 }
 
 exports.listOrder = async (req, res) => {
    //
    res.json(await Order.find().populate('User').populate('Product').exec())
 }
 exports.UpdateOrder = async (req, res) => {
   //
   try{
      console.log("THIS IS FROM THE PRODUCT UPDATE",req.body)
      req.body.slug = slugify(req.body.name)
      res.json(await Order.findOneAndUpdate({_id:req.body._id},
          req.body, {new:true}))}
      catch (err){
         console.log(err)
      }
   
}

exports.DeleteOrder = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Order.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}

exports.DeleteAllOrders = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Order.remove()
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}