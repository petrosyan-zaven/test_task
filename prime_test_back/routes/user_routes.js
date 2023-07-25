

function user_route(app) {
    const user_controller = require('../controllers/user_controller')

    app.post('/register', user_controller.register);
    app.post('/login', user_controller.login);
    app.get('/users', user_controller.allUsers)
    app.get('/user/:id', user_controller.userById)
}

module.exports = { user_route };
