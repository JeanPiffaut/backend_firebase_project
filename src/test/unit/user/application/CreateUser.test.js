const CreateUser = require('../../../../user/application/CreateUser.js');
const User = require('../../../../user/domain/User.js');

describe('CreateUser', () => {
    it('should create a user', async () => {
        const mockUserRepository = {
            save: jest.fn().mockResolvedValue(true),
        };
        const createUser = new CreateUser(mockUserRepository);
        const user = new User('1', 'John Doe', 'john.doe@example.com');

        await createUser.execute(user);

        expect(mockUserRepository.save).toHaveBeenCalledWith(user);
    });
});
