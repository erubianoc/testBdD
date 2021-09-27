import express from 'express';
import  {paginaInicio,paginaNosotros,paginaRegistro,paginaRegistraDatos} from "../controllers/paginaControllers.js"
import {altaCliente, dataId} from "../controllers/datosFormularios.js";
import {datosCuenta} from "../controllers/ControllerPrometeo.js"
import {datosMovi} from "../controllers/ControllerMovimiento.js"
const router = express.Router();

router.get('/', paginaInicio );
router.get('/Movimientos', datosMovi );

router.get('/Nosotros', paginaNosotros);

router.get('/Registrate', paginaRegistro);
router.post('/Registrate', altaCliente)
router.get('/TusDatos', datosCuenta );


export default router;