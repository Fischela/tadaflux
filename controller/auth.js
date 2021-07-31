const User = require('../model/user')

exports.createOrUpdateUser = async (req, res) => {
    const {name, email, picture} = req.user
    const user  = await User.findOneAndUpdate({email}, { name, picture}, {new:true})
    console.log(req.user)

    if (user){
        res.json(user)
        console.log(`FROM THE IF ${user}`)
    }
    else{
        const newUser = new User({
            name,
            email,
            picture
        }).save()

        console.log('REGISTRATION OF NEW USER '+ newUser)
        res.json(
            newUser
        )
    }
}

exports.currentUser = async (req, res) => {
    const {email} = req.user
    const firebaseUser = await User.findOne({email}).exec()
    res.json(firebaseUser)
    

}

exports.adminUser = async (req, res) => {
    const {email} = req.user
    const firebaseUser = await User.findOne({email}).exec()
    res.json(firebaseUser)
    

}