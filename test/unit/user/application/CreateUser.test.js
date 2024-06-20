const CreateUser = require('../../../../src/user/application/CreateUser');
const User = require('../../../../src/user/domain/User');

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
