const request = require('supertest');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

describe('User E2E', () => {
    it('should create a new user and retrieve it', async () => {
        const user = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
        const projectId = process.env.PROJECT_ID; // Leer el ID del proyecto desde las variables de entorno
        const baseUrl = `http://localhost:5001/${projectId}/us-central1/api`;
        await request(baseUrl).post('/users').send(user).expect(201);

        const response = await request(baseUrl).get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(user);
    });
});
