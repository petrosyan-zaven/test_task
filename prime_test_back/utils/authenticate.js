const JWT = require('jsonwebtoken');
require('dotenv').config();

 const SECRET = process.env.SECRET;

 function adminAuthenticate(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    // const token = req.headers.authorization

    if ( token == null) {
        return res.sendStatus(401)
    }

    JWT.verify(token, SECRET, ( err, user ) => {
        if (err) {
            return res.sendStatus(401)
        }
        console.log(user.id);

        if( user.role === 1 ) {
            next()
        }
    })
 }

 function userAuthenticate(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    // const token = req.headers.authorization
    const { id } = req.params;

    if ( token == null) {
        return res.sendStatus(401)
    }

    JWT.verify(token, SECRET, ( err, user ) => {
        if (err) {
            return res.sendStatus(401)
        }
        console.log(user);
      

        if( user.id == id ) {
            next()
        }
    })
 }

 module.exports = { adminAuthenticate, userAuthenticate }