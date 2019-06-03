const express = require('express')
const router = express.Router()
const User = require('../../../models/auth/User')
const jwt = require('jsonwebtoken')
const config = require('../../../config/default.json')
const jwtKey = config.jwtKey
const expirationTime = config.expirationTime
const bcrypt = require('bcryptjs')

router.post('/',(req,res)=>{
    let {name,email,password} = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
      }
    User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User with this email id already exists' });
      const newUser = new User({
        name,
        email,
        password
      });
      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                jwtKey,
                { expiresIn: expirationTime },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              )
            });
        })
      })
    })
})

module.exports = router