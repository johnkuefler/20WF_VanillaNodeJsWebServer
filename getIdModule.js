const url = require('url');

exports.getId = function(req) {
    let q = url.parse(req.url, true).query;
    if (q.id) {
        return q.id;
    } else {
        return null;
    }
}