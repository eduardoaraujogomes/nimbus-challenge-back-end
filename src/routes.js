const { Router } = require('express');

const ForecastController = require('./app/controllers/ForecastController');

const router = Router();

router.get('/forecasts', ForecastController.index);
router.post('/forecasts', ForecastController.store);

module.exports = router;
