const User = require('../../../../src/user/domain/User');

describe('User', () => {
    it('should create a user instance', () => {
        const user = new User('1', 'John Doe', 'john.doe@example.com');

        expect(user.id).toBe('1');
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('john.doe@example.com');
    });
});
