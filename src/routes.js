const { Router } = require('express');

const ForecastController = require('./app/controllers/ForecastController');
const LocalizationController = require('./app/controllers/LocalizationController');

const router = Router();

router.get('/forecasts', ForecastController.index);
router.post('/forecasts', ForecastController.store);

router.get('/localizations', LocalizationController.index);
router.post('/localizations', LocalizationController.store);
module.exports = router;
