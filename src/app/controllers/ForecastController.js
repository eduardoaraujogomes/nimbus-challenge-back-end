const ForecastsRepository = require('../repositories/ForecastsRepository');

class ForecastsController {
  async index(request, response) {
    const forecastss = await ForecastsRepository.findAll();

    response.json(forecastss);
  }

  async store(request, response) {
    const {
      day, hour, millimeters, id_locations,
    } = request.body;

    if (!day || !hour || (!millimeters && millimeters !== 0) || !id_locations) {
      return response.status(400).json({ error: 'Day, hour, millimeters and id location are required' });
    }

    const checkHourFormat = ForecastsRepository.isValidHourFormat(hour);

    if (!checkHourFormat) {
      return response.status(404).json({ error: 'Use a valid hour format. Ex: 00h - 23h' });
    }

    const hourExists = await ForecastsRepository.findByHour(hour, id_locations);

    if (hourExists) {
      return response.status(404).json({ error: 'This hour already exists' });
    }

    const checkMillimeters = ForecastsRepository.isValidMillimeters(millimeters);

    if (!checkMillimeters) {
      return response.status(404).json({ error: 'The millimeters value must be greater than or equal to 0' });
    }

    const locationExists = await ForecastsRepository.checkValidLocationId(id_locations);

    if (!locationExists) {
      return response.status(404).json({ error: 'Put a valid location id' });
    }

    const forecastss = await ForecastsRepository.create({
      day, hour, millimeters, id_locations,
    });
    response.json(forecastss);
  }
}

module.exports = new ForecastsController();
