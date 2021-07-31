const {createOrUpdateUser, currentUser, adminUser} = require('../controller/auth')
const {Create, Read, Delete , list, Update} = require('../controller/categories')
const {CreateSub, ReadSub, DeleteSub , listSub, UpdateSub, listSubSpec} = require('../controller/sub')
const {CreateProduct, ReadProduct, DeleteProduct, listProduct, UpdateProduct} = require('../controller/product')



const {authCheck, adminCheck} = require('../middleware/auth')
const express = require('express')
const { ImageUpload, ImageDelete } = require('../controller/imageUploader')
const { listOrder, ReadOrder, CreateOrder, UpdateOrder, DeleteOrder, DeleteAllOrders } = require('../controller/order')

const router = express.Router()


router.post("/createupdateuser", authCheck, createOrUpdateUser)//Login and signup
router.post("/currentuser", authCheck, currentUser)//fetch data for user
router.post("/adminuser", authCheck, adminCheck, adminUser)//fetch data for admin
// Categories
router.get("/categories", list)
router.get("/category/:slug", Read)
router.post("/category", authCheck, adminCheck, Create)
router.put("/category", authCheck, adminCheck, Update)
router.post("/categoryd", authCheck, adminCheck,Delete)
// Sub categories
router.get("/subs", listSub)
router.get("/sub/:slug", ReadSub)
router.post("/sub", authCheck, adminCheck, CreateSub)
router.put("/sub", authCheck, adminCheck, UpdateSub)
router.post("/subd", authCheck, adminCheck,DeleteSub)
router.post("/subspec", authCheck, adminCheck,listSubSpec)


// Product
router.get("/products", listProduct)
router.get("/product/:slug", ReadProduct)
router.post("/product", authCheck, adminCheck, CreateProduct)
router.put("/product", authCheck, adminCheck, UpdateProduct)
router.post("/productd", authCheck, adminCheck,DeleteProduct)

// images
router.post("/image-upload", authCheck, adminCheck,ImageUpload)
router.post("/image-delete", authCheck, adminCheck,ImageDelete)

// Order
router.get("/orders", listOrder)
router.get("/order/:id", ReadOrder)
router.post("/order",authCheck, CreateOrder)
router.put("/order", authCheck, adminCheck, UpdateOrder)
router.post("/orderd", authCheck, adminCheck,DeleteOrder)
router.get("/deleteorders",DeleteAllOrders)







module.exports = router