import { Router } from "express";
import { getDataTotal, getDataForRegion, getDataProducts, getDataSellers, getDataTable} from "../controllers/Functions.controllers.js";

const router = Router();

// Definimos las rutas
router.get('/api/totalventas', getDataTotal);

router.get('/api/region', getDataForRegion);

router.get('/api/productos', getDataProducts);

router.get('/api/vendedores', getDataSellers);

router.get('/api/tableData', getDataTable);

export default router;