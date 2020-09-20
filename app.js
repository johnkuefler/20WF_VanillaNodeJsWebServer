const http = require('http');
const dt = require('./datetimemodule');
const url = require('url');
const fs = require('fs');
const idUtil = require('./getIdModule');
const ageGetter = require('./ageGetterModule');

http.createServer(function (req, res) {

    try {
        res.end(
            JSON.stringify(ageGetter.getAgeFromDate(new Date('October 13, 2021')))
            );
    } catch(err) {
        // do something with error
        res.end(err.message)
    }



    // fs.readFile('index.html', function (err, data) {
    //     if (err !== null) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end();
    //     } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(data);
    //         return res.end();
    //     }
    // });
    // fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
    //         if (err) throw err;
    //         console.log('Saved!');
    //     });
        
}).listen(process.env.PORT || 8080);
