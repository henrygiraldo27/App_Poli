
// Data quemada, alimenta la api
const data = [
    {
        "Region": "Centro",
        "Producto": "Accesorios",
        "Vendedor": "David Cortés",
        "Ventas": "8287",
        "Valor": "18287.00"
    },
    {
        "Region": "Centro",
        "Producto": "Accesorios",
        "Vendedor": "Karen Salazar",
        "Ventas": "6909",
        "Valor": "16909.00"
    },
    {
        "Region": "Centro",
        "Producto": "Dispositivos",
        "Vendedor": "David Cortés",
        "Ventas": "111420",
        "Valor": "22284000.00"
    },
    {
        "Region": "Centro",
        "Producto": "Dispositivos",
        "Vendedor": "Karen Salazar",
        "Ventas": "12948",
        "Valor": "25896000.00"
    },
    {
        "Region": "Centro",
        "Producto": "Sistemas",
        "Vendedor": "David Cortés",
        "Ventas": "20098",
        "Valor": "10049000.00"
    },
    {
        "Region": "Centro",
        "Producto": "Sistemas",
        "Vendedor": "Karen Salazar",
        "Ventas": "30633",
        "Valor": "1531650.00"
    },
    {
        "Region": "Este",
        "Producto": "Accesorios",
        "Vendedor": "Ana Duarte",
        "Ventas": "9323",
        "Valor": "19323.00"
    },
    {
        "Region": "Este",
        "Producto": "Accesorios",
        "Vendedor": "Lucas Castaño",
        "Ventas": "7667",
        "Valor": "17667.00"
    },
    {
        "Region": "Este",
        "Producto": "Dispositivos",
        "Vendedor": "Ana Duarte",
        "Ventas": "10348",
        "Valor": "206960.00"
    },
    {
        "Region": "Este",
        "Producto": "Dispositivos",
        "Vendedor": "Lucas Castaño",
        "Ventas": "9312",
        "Valor": "18624000.00"
    },
    {
        "Region": "Este",
        "Producto": "Sistemas",
        "Vendedor": "Ana Duarte",
        "Ventas": "13531",
        "Valor": "67655000.00"
    },
    {
        "Region": "Este",
        "Producto": "Sistemas",
        "Vendedor": "Lucas Castaño",
        "Ventas": "13374",
        "Valor": "6687000.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Accesorios",
        "Vendedor": "Kevin Díaz",
        "Ventas": "4744",
        "Valor": "14744.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Accesorios",
        "Vendedor": "Sara Acosta",
        "Ventas": "5442",
        "Valor": "15442.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Dispositivos",
        "Vendedor": "Kevin Díaz",
        "Ventas": "10711",
        "Valor": "2142200.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Dispositivos",
        "Vendedor": "Sara Acosta",
        "Ventas": "8780",
        "Valor": "175600.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Sistemas",
        "Vendedor": "Kevin Díaz",
        "Ventas": "32855",
        "Valor": "16427500.00"
    },
    {
        "Region": "Oeste",
        "Producto": "Sistemas",
        "Vendedor": "Sara Acosta",
        "Ventas": "23151",
        "Valor": "1157500.00"
    }
]

// Obtenemos datos por region
export const getDataTotal = async (req, res) => {
    let totalCantidad = 0;
    let totalVentas = 0;

    data.map(item => {
        totalCantidad += parseInt(item.Ventas);
        totalVentas += parseInt(item.Valor);
    })


    let objet = [{
        VENTAS: totalCantidad,
        VALORTOTAL: totalVentas,
    }]

    res.json(objet);
};

// Obtenemos datos por region
export const getDataForRegion = async (req, res) => {

    const totalVentasPorRegion = {};
    
    data.forEach(item => {
        const region = item.Region;
        const ventas = parseInt(item.Ventas);
        
        if (totalVentasPorRegion.hasOwnProperty(region)) {
            totalVentasPorRegion[region] += ventas;
        } else {
            totalVentasPorRegion[region] = ventas;
        }
    });

    // Formatear el objeto como se requiere
    const result = Object.keys(totalVentasPorRegion).map(region => ({
        Region: region,
        Cantidad: totalVentasPorRegion[region]
    }));

    res.json(result);

};

// Obtenemos datos de los productos
export const getDataProducts = async (req, res) => {

    const totalVentasPorRegion = {};
    
    data.forEach(item => {
        const region = item.Producto;
        const ventas = parseInt(item.Valor);
        
        if (totalVentasPorRegion.hasOwnProperty(region)) {
            totalVentasPorRegion[region] += ventas;
        } else {
            totalVentasPorRegion[region] = ventas;
        }
    });

    // Formatear el objeto como se requiere
    const result = Object.keys(totalVentasPorRegion).map(region => ({
        Producto: region,
        Valor: totalVentasPorRegion[region]
    }));

    res.json(result);

};

// Obtenemos datos de los vendedores
export const getDataSellers = async (req, res) => {

    const totalVentasPorRegion = {};
    
    data.forEach(item => {
        const region = item.Vendedor;
        const ventas = parseInt(item.Ventas);
        
        if (totalVentasPorRegion.hasOwnProperty(region)) {
            totalVentasPorRegion[region] += ventas;
        } else {
            totalVentasPorRegion[region] = ventas;
        }
    });

    // Formatear el objeto como se requiere
    const result = Object.keys(totalVentasPorRegion).map(region => ({
        Vendedor: region,
        Cantidad: totalVentasPorRegion[region]
    }));

    res.json(result);

};

// Obtenemos datos de los vendedores
export const getDataTable = async (req, res) => {
    res.json(data);
};

