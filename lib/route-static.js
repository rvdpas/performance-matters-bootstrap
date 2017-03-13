const path = require('path');

module.exports = function routeStatic(req, res, next) {
    const ext = path.parse(req.url).ext;

    if (ext !== '.html' && ext !== '') {
        req.url = path.join('/static/', req.url);
    }

    next();
};