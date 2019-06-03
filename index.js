const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/default.json');
const bodyParser = require('body-parser')
//DB configuration url from default.json
const db = config.mongoURI;
const rateLimit = require("express-rate-limit");
const tokenValidator = require('./middleware/tokenValidator')
//Cross origin middleware
const allowCrossDomain = (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
//Connect to mongodb atlas
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
//Create server instance
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
// Serve the static files from the React app
app.use(limiter)
app.use(express.static(path.join(__dirname, 'cambium_react/build')));

//apply middleware
app.use(allowCrossDomain)
app.use(tokenValidator)
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Configure routes
app.use('/authenticate',require('./routes/api/auth/SignIn'))
app.use('/registerUser',require('./routes/api/auth/SignUp'))
app.use('/getUserDetail',require('./routes/api/data/GetUserDetail'))
app.use('/getLoans',require('./routes/api/data/GetLoans'))

//Serve static content
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/cambium_react/build/index.html'));
});

const port = process.env.PORT || 6001;
app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});


