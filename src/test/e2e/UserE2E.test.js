const request = require('supertest');
let server;

describe('User E2E', () => {
    beforeEach((done) => {
        // eslint-disable-next-line no-unused-vars
        const { app, server: srv } = require('../../common/config/app.js');
        server = srv;
        done();
    });

    afterEach((done) => {
        server.close(done); // Cierra el servidor después de cada prueba
    });

    it('should create a new user and retrieve it', async () => {
        const user = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
        await request(server).post('/users').send(user).expect(201);

        const response = await request(server).get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(user);
    });
});
