const { Router } = require('express');

const ForecastsController = require('./app/controllers/ForecastController');
const LocalizationController = require('./app/controllers/LocationController');

const router = Router();

router.get('/forecasts', ForecastsController.index);
router.post('/forecasts', ForecastsController.store);

router.get('/locations', LocalizationController.index);
router.post('/locations', LocalizationController.store);
module.exports = router;
