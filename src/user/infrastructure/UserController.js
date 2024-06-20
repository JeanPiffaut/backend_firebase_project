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

    static async getUserById(req, res) {
        const { id } = req.params;
        const user = await userRepository.findById(id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    }
}

module.exports = UserController;
