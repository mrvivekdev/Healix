import express from 'express';
const route = express.Router();

import {NormalIssueHandler} from '../controller/IssueController.js'

route.post('/normal', NormalIssueHandler);

export default route;
