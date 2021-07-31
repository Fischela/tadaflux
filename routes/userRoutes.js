const express = require('express')

const router = express.Router()

router.get("/dreamer", async (req, res)=>{
    res.json({
        'res':"user route was clicked incidentally"
    })
})

module.exports = router