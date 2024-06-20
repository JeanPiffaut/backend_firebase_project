const User = require('../domain/User');
const CreateUser = require('../application/CreateUser');
const InMemoryUserRepository = require('./InMemoryUserRepository');

const userRepository = new InMemoryUserRepository();
const createUser = new CreateUser(userRepository);

class UserController {
    static async createUser(req, res) {
        const { id, name, email } = req.body;
        const user = new User(id, name, email);
        await createUser.execute(user);
        res.status(201).send(user);
    }
}

module.exports = UserController;
