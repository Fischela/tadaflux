const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
})
exports.ImageUpload = async (req, res) => {
    // console.log("THIS IS FROM THE IMAGE SHIT",cloudinary.image(req.body.image, {height:50, width:100, crop:"fit"}))
    // console.log("THIS IS FROM THE IMAGE UPLOADER", req.body)
    let newImage = await cloudinary.image(req.body.image, {height:50, width:100, crop:"fit"})
    console.log("THIS IS NEW  IMAGE", req.body.image)
    await cloudinary.uploader.upload(req.body.image, {public_id:Date.now(), folder:"oshongo"},
  function(error, result) {if(result) res.json({public_id:result.public_id, url:result.url }); else res.json(error) })
}

exports.ImageDelete = async (req, res) => {
    //

    console.log("THIS IS FROM THE IMAGE DELETER", req.body)
    await cloudinary.uploader.destroy(req.body.image,
  function(error, result) {if(result) res.json(result); else res.json(error) })

}
