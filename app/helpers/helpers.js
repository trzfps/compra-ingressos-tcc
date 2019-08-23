const jwt = require('jsonwebtoken');
class Helpers {
 generateToken(params = {}){
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 86400
    });
 }
}
module.exports = new Helpers;