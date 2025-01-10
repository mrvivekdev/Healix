import express from 'express';
const route = express.Router();

import {getMedicalHistory, getHealthMetrics} from '../controller/MedicalController.js'

route.post('/mediaclhistroy', getMedicalHistory);
route.post('/healthmetrics', getHealthMetrics);

export default route;
