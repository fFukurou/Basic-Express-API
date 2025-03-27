const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
     console.log("here");
    //  res.json({ message: "Error "});
    res.render('index', { text123: "World" });
}) 


const userRouter = require('./routes/users');

app.use('/users', userRouter);






app.listen(3000);