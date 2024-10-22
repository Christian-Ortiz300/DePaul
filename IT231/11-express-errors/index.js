"use strict"; 

const express = require("express"), 
    app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
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

app.use(errorController.logErrors);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoResourceFound);

app.listen(app.get('port'), 
() => {
    console.log(`Server running at http://localhost:${app.get
    ('port')}`);
}); 