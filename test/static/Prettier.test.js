const {exec} = require('child_process');

describe('Code Formatting', () => {
    it('should be correctly formatted', (done) => {
        exec('npx prettier --check .', (error, stdout, stderr) => {
            expect(stdout).toContain('All matched files use Prettier code style!');
            done();
        });
    });
});
