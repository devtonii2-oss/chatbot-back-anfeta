// routes/admin.routes.js
import { Router } from "express";
import {
  obtenerTodasExplicacionesAdmin,
  obtenerExplicacionesPorActividad,
  obtenerExplicacionesPorPendiente,
  obtenerTodasActividadesConExplicaciones
  , obtenerTodasActividadesConExplicacionesIa
} from "../controllers/admin.controller.js";

const router = Router();

// Rutas principales
router.get('/todas-explicaciones', obtenerTodasExplicacionesAdmin);
router.get('/explicaciones/actividad/:actividadId', obtenerExplicacionesPorActividad);
router.get('/explicaciones/pendiente/:pendienteId', obtenerExplicacionesPorPendiente);
router.get('/todas-actividades', obtenerTodasActividadesConExplicaciones);
router.get('/todas-actividades-resumen-ia', obtenerTodasActividadesConExplicacionesIa);

// Ruta para limpiar cache (útil para desarrollo)
// router.post('/admin/limpiar-cache', limpiarCacheUsuarios);

export default router;