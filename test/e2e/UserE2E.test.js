const request = require('supertest');
const { app, server } = require('../../src/common/config/app');

describe('User E2E', () => {
    afterAll((done) => {
        server.close(done); // Cierra el servidor después de que las pruebas hayan terminado
    });

    it('should create a new user and retrieve it', async () => {
        const user = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
        await request(app).post('/users').send(user).expect(201);

        const response = await request(app).get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(user);
    });
});
