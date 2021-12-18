const ForecastsRepository = require('../repositories/ForecastsRepository');

class ForecastsController {
  async index(request, response) {
    const forecastss = await ForecastsRepository.findAll();

    response.json(forecastss);
  }

  async store(request, response) {
    const {
      day, hour, millimeters, id_location,
    } = request.body;

    if (!day || !hour || !millimeters || id_location) {
      return response.status(400).json({ error: 'Day, hour, millimeters and id location are required' });
    }
    const hourExists = await ForecastsRepository.findByHour(hour);

    if (!hourExists) {
      return response.status(404).json({ error: 'This hour already exists' });
    }
    const locationExists = await ForecastsRepository.checkValidLocationId(id_location);

    if (!locationExists) {
      return response.status(404).json({ error: 'Put a valid location id' });
    }

    const forecastss = await ForecastsRepository.create({
      day, hour, millimeters, id_location,
    });
    response.json(forecastss);
  }
}

module.exports = new ForecastsController();
