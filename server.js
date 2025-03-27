const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true }));
//  allows us to parse json from the body
app.use(express.json());

app.set('view engine', 'ejs');

// WE want this middleware to be used on every single request, so define it at the top
app.use(logger);


// app.get('/', logger ,(req, res) => {
//     //  console.log("here");
//     //  res.json({ message: "Error "});
//     res.render('index', { text123: "World" });
// }) 


const userRouter = require('./routes/users');

app.use('/users', userRouter);

// MIDDLEWARE
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);