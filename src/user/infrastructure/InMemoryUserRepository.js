const UserRepository = require('../domain/UserRepository');

class InMemoryUserRepository extends UserRepository {
    constructor() {
        super();
        this.users = new Map();
    }

    async save(user) {
        this.users.set(user.id, user);
        return user;
    }

    async findById(id) {
        return this.users.get(id);
    }
}

module.exports = InMemoryUserRepository;
