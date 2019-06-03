const config = require('../config/default.json');
const jwt = require('jsonwebtoken');
const _ = require('underscore')
const tokenValidator = (req, res, next)=> {
  const token = req.header('Token');
 // console.log(token)
  //If request is from a nonSecurePath pass on to next() because authenticate or registerUser cannot have token in their header
    if(req.path == '/authenticate' || req.path == '/registerUser' || req.path == '/home' || req.path == '/signup'){
        return next()
    }
  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorizaton denied' });
  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtKey);
    // Add user object into request object that contains id,expiration time from decoded token
    req.user = decoded;
    next();
  } catch (e) {
      if(e.name === 'TokenExpiredError'){
        res.status(401).json({ cause: `${e.name + ': '}${e.message}${' at '+e.expiredAt}`,msg:`Token expired, get a new one`,errorCode:'T401'});
      }else{
        res.status(401).json({ msg: `${e.name + ': '}${e.message}`});
      }
    
  }
}

module.exports = tokenValidator;
