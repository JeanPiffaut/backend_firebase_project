const {exec} = require('child_process');

describe('Linting', () => {
    it('should pass linting', (done) => {
        exec('npx eslint .', (error, stdout, stderr) => {
            expect(error).toBeNull();
            expect(stderr).toBe('');
            done();
        });
    });
});
