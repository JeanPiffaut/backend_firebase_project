class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute(user) {
        return this.userRepository.save(user);
    }
}

module.exports = CreateUser;
