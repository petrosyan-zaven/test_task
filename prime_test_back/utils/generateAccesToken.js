const JWT = require('jsonwebtoken');
require('dotenv').config()

const SECRET = process.env.SECRET;

function generateAccessToken(id, firstName, role) {
    return JWT.sign( {id, firstName, role }, SECRET, { expiresIn: '36000s' } )
}

module.exports = { generateAccessToken }