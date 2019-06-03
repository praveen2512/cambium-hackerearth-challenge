const express = require('express')
const router = express.Router()
const User = require('../../../models/auth/User')
const _ = require('lodash')

router.get('/',(req,res)=>{
    const _id = req.user.id 
    User.findById({_id}).then(user=>{
        if(!user){
            return res.status(404).json({"msg":"No user found with id specified","errorCode":"U404"})
        }
        let {name,email,_id} = user;
        res.status(200).json({
            _id,name,email
        })
    })
})


module.exports = router