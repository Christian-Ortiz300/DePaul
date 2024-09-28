"use strict"; 

const fs = require('fs'), 
    httpsStatus = require('http-status-codes'), 
    contentTypes = require('./content-types');
const { get } = require('http');

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if(error){
                res.writeHead(httpsStatus.INTERNAL_SERVER_ERROR, contentTypes.html),
                res.end('There was an error serving content!');
            }
            res.end(data);
        });
    }
}