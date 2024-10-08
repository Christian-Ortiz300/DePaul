"use strict"; 

const port = 3000, 
    express = require('express'), 
    app = express(), 
    homeController = require('./controllers/homeController');

app.use((req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next(); 
}); 

app.get('/items/:vegetable', homeController.
    sendReqParam); 
    
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
}); 