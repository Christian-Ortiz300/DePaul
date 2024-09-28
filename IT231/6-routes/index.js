"use strict"; 

const routeResponseMap = {
    '/info': '<h1>Info Page</h1>',
    '/contact': '<h1>Contact Page</h1>',
    '/about': '<h1>About Page.</h1>',
    '/error': '<h1>Sorry the page isnt here.</h1>'
}

const port = 3000,

http = require("http"),
httpStatus = require("http-status-codes"), 
app = http.createServer((req, res) => { 
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    if(routeResponseMap[req.url]){
        res.end(routeResponseMap[req.url]);
    }else{
        res.end("<h1>Welcome!</h1>");
    }
});

// app.on("request", (req, res) => {
//     res.writeHead(httpStatus.StatusCodes.OK,{

//         "Content-Type": "text/html"
//     });

//     let responseMessage = "<h1>This will show on the screen</h1>";

//     res.end(responseMessage);
// });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
