const admin = require('../firebase')
const User = require('../model/user')

exports.authCheck = async (req, res, next)=>{
    // console.log(req.headers)
    try{
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
        // console.log(firebaseUser)
        req.user = firebaseUser
        console.log(req.user)
    }
    catch (err){
        console.log(err)
        res.json({
            error: err
        })
    }
    next()
}

exports.adminCheck = async (req, res, next)=>{
    console.log("REQ>USER", req.headers)
    const firebaseUser = req.user.email
    const adminUser = await User.findOne({email:firebaseUser}).exec()
    if(adminUser.role !== "admin"){
        res.status(403).json({err:"admin access denied"})
    }else{
        next()
    }
}