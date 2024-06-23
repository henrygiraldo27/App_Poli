const axios = require('axios');
const assert = require('assert');

describe('Pruebas de API', function() {
    this.timeout(5000); // Extiende el tiempo de espera en caso de que las solicitudes tarden más de lo esperado

    describe('Endpoint /api/totalventas', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get('http://localhost:3000/api/totalventas');
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
                const response = await axios.get('http://localhost:3000/api/region');
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });

    describe('Endpoint /api/productos', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get('http://localhost:3000/api/productos');
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });

    describe('Endpoint /api/vendedores', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get('http://localhost:3000/api/vendedores');
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });

    describe('Endpoint /api/tableData', function() {
        it('debería devolver resultados', async function() {
            try {
                const response = await axios.get('http://localhost:3000/api/tableData');
                assert(response.data.length > 0, 'La respuesta no contiene datos.');
                console.log('Pruebas correctas: La respuesta contiene datos.');
            } catch (error) {
                assert.fail(`Error en la solicitud: ${error.message}`);
            }
        });
    });
});
