const express = require('express')
const router = express.Router()
const User = require('../../../models/auth/User')
const jwt = require('jsonwebtoken')
const config = require('../../../config/default.json')
const bcrypt = require('bcryptjs')
const jwtKey = config.jwtKey
const expirationTime = config.expirationTime
router.post('/',(req,res)=>{
    const { email, password } = req.body;

    // Simple validation
    if(!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(!user) return res.status(400).json({ msg: 'User Does not exist' });
  
        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
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
          })
      })
})

module.exports = router