const axios = require('axios');
const assert = require('assert');

// Obtén la URL base de la API desde una variable de entorno o constante
const API_BASE_URL = process.env.API_BASE_URL || 'http://192.168.1.100:3000';

describe('Pruebas de API', function() {
    this.timeout(5000); // Extiende el tiempo de espera en caso de que las solicitudes tarden más de lo esperado

    describe('Endpoint /api/totalventas', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/totalventas`);
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });

    describe('Endpoint /api/region', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/region`);
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });

    // Resto de pruebas similares...
});
