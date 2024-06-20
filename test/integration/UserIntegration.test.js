const CreateUser = require('../../src/user/application/CreateUser');
const InMemoryUserRepository = require('../../src/user/infrastructure/InMemoryUserRepository');
const User = require('../../src/user/domain/User');

describe('User Integration', () => {
    it('should save and find a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);
        const user = new User('1', 'John Doe', 'john.doe@example.com');

        await createUser.execute(user);

        const foundUser = await userRepository.findById('1');
        expect(foundUser).toEqual(user);
    });
});
