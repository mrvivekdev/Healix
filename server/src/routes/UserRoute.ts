import express from 'express';
const route = express.Router();

import {HandelCreateUser, HandelLogin} from '../controller/UserController.js'

route.post('/create', HandelCreateUser);
route.post('/login', HandelLogin);

export default route;
