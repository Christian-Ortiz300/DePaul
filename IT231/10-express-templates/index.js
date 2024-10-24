"use strict"; 

const express = require("express"), 
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"); 

app.set('port', process.env.PORT || 3000); 
app.set('view engine', 'ejs'); 
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
); 

app.use(express.json());

app.use((req, res, next) => {
    console.log(`requst made to: ${req.url}`); 
    next();
});

app.get('/name', homeController.respondWithName); 

app.listen(app.get('port'), 
() => {
    console.log(`Server running at http://localhost:${app.get
    ('port')}`);
}); 