const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
    console.log( req.query.name );
    res.send("User List");
})


router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "Test" });
})



router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push( {firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log("Error");
        res.render('users/new', { firstName: req.body.firstName });
    }
})


router.route("/:id").get((req, res) => {
    console.log(req.user);
    // Inside 'new.ejs', we set the name="firstName" in the input, so that's what we're using here.
    res.send(`Hi ${req.user['name']}`);
}).put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
})


const users = [{ name: 'fFukurou' }, { name: 'Psylocke'}];
// MIDDLEWARE
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}


module.exports = router;