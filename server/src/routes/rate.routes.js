import express from 'express';
import RateController from '../controllers/rate.controller.js';

const rateRouter = express.Router();

rateRouter.post('/rate/new', RateController.createRate);
rateRouter.delete('/rate/:id', RateController.deleteRate);
rateRouter.get('/rate/:id', RateController.getRateById);
rateRouter.put('/rate/:id', RateController.updateRate);
rateRouter.get('/rate', RateController.getAllRates);


export default rateRouter;
