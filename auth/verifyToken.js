let jwt = require('jsonwebtoken');
const config = require("../config/");

function verifyToken(req, res, next) {
    var token = req.headers.authorization;

    if (!token) {
        return res.json({ status: 400, message: "Failed to authenticate"});
    }
    
    jwt.verify(token, config.secretKey, function (err, decoded) {
        if (err) {
            return res.status(400).send({ auth: false, message: 'Failed to authenticate.' });
        }

        // decode payload to save it for other routes
        req.userCode = decoded.userCode;
        next();
    });
}

module.exports = verifyToken;
