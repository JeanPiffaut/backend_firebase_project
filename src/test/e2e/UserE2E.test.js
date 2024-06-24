const request = require('supertest');

describe('User E2E', () => {
    it('should create a new user and retrieve it', async () => {
        const user = {id: '1', name: 'John Doe', email: 'john.doe@example.com'};

        await request('http://localhost:5001/trading-bot-ca422/us-central1/api').post('/users').send(user).expect(201);

        const response = await request('http://localhost:5001/trading-bot-ca422/us-central1/api').get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(user);
    });
});
