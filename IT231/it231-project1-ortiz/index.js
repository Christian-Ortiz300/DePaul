"use strict"; 

const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    router = require('./router'),
    contentTypes = require('./contentTypes'),
    utils = require('./utils');

router.get('/', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/index.html', res);
});

router.get('/contact.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/contact.html', res);
});

router.get('/courses.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/courses.html', res);
});

router.get('/recipe.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/recipe.html', res); 
});

router.get('/cities.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/cities.html', res);
});

router.get('/baking.html', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/baking.html', res);
});

router.post('/', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile('views/thanks.html', res);
});

router.get('/graph.png', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile('public/images/graph.png', res);
});

router.get('/people.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/people.jpg', res);
});

router.get('/product.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/product.jpg', res);
});
router.get('/enchiladas.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/enchiladas.jpg', res);
});

router.get('/tamales.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/tamales.jpg', res);
});

router.get('/pozole.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/pozole.jpg', res);
});

router.get('/new-orleans.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/new-orleans.jpg', res);
});

router.get('/newyorkcity.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/newyorkcity.jpg', res);
});

router.get('/chicago.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/chicago.jpg', res);
});

router.get('/san-francisco.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/san-francisco.jpg', res);
});

router.get('/los-angeles.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/los-angeles.jpg', res);
});

router.get('/conchas.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/conchas.jpg', res);
});

router.get('/focaccia.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/focaccia.jpg', res);
});

router.get('/baguette.jpg', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile('public/images/baguette.jpg', res);
});

router.get('/confetti_cuisine.css', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile('public/css/confetti_cuisine.css', res);
});

router.get('/bootstrap.css', (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile('public/css/bootstrap.css', res);
});

http.createServer(router.handle).listen(port)
console.log(`The server is listening on port number: ${port}`);