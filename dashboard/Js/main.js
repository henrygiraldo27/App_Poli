// Consulta total ventas
async function fetchDataTotal() {

    try {
        const response = await fetch('http://localhost:3000/api/totalventas');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();

        document.getElementById('ventasMes').textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data[0].VALORTOTAL);
        document.getElementById('cantidadMes').textContent = data[0].VENTAS;
    } catch (error) {
        console.error('Error al obtener los datos de los vendedores:', error);
    }
}

// Consulta por region
async function fetchRegion() {

    let headerRegion = [];
    let bodyRegion = [];

    try {
        const response = await fetch('http://localhost:3000/api/region');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();

        data.forEach(element => {
            headerRegion.push(element.Region);
            bodyRegion.push(element.Cantidad);
        });

        const ctx = document.getElementById('regionChar');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: headerRegion,
                datasets: [{
                    label: 'Cantidad Ventas Por Region',
                    data: bodyRegion,
                    borderColor: '#ffffff',
                    backgroundColor: '#F74E0A',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error al obtener los datos de los vendedores:', error);
    }
}

// Consulta Vendedores
async function fetchSellers() {

    let headerSellers = [];
    let bodyVent = [];
    let bodyValue = [];
    let colorsArray = [];

    try {
        const response = await fetch('http://localhost:3000/api/vendedores');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();

        data.forEach(element => {
            headerSellers.push(element.Vendedor);
            bodyVent.push(element.Cantidad);
            bodyValue.push(element.Valor);
            colorsArray.push(generateColor(data));
        });

        const ctx = document.getElementById('sellersPie');

        const datas = {
            labels: headerSellers,
            datasets: [{
              label: 'Mejor Vendedor',
              data: bodyVent,
              backgroundColor: colorsArray,
              hoverOffset: 4
            }]
          };

        new Chart(ctx, {
            type: 'pie',
            data: datas,
        });

    } catch (error) {
        console.error('Error al obtener los datos de los vendedores:', error);
    }
}

// Consulta por productos
async function fetchProducts() {

    let headerProducts = [];
    let bodyProductValue = [];
    let bodyProductCant = [];

    try {
        const response = await fetch('http://localhost:3000/api/productos');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();

        data.forEach(element => {
            headerProducts.push(element.Producto);
            bodyProductCant.push(element.Cantidad);
            bodyProductValue.push(element.Valor);
        });

        const ctx = document.getElementById('productChar');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: headerProducts,
                datasets: [{
                    label: 'Ventas Por Producto',
                    data: bodyProductValue,
                    borderColor: '#ffffff',
                    backgroundColor: '#32A5C9',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


    } catch (error) {
        console.error('Error al obtener los datos de los vendedores:', error);
    }
}

// Generador de colores aleatorio
const generateColor = (data) => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < data.length; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Iniciamos las funciones una vez cargue el sistema
fetchDataTotal();
fetchRegion();
fetchSellers();
fetchProducts();