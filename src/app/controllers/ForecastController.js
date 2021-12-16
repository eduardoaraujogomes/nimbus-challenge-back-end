const ForecastsRepository = require('../repositories/ForecastsRepository');

class ForecastController {
  async index(request, response) {
    const forecasts = await ForecastsRepository.findAll();

    response.json(forecasts);
  }

  async store(request, response) {
    const {
      neighbourhood,
      forecast,
    } = request.body;

    if (!neighbourhood) {
      return response.status(400).json({ error: 'Neighbourhood is required' });
    }
    const neighbourhoodExists = await ForecastsRepository.findByNeighbourhood(neighbourhood);

    if (neighbourhoodExists) {
      return response.status(404).json({ error: 'Neighbourhood exist' });
    }
    if (!forecast) {
      return response.status(400).json({ error: 'Forecast can not be empety' });
    }

    const forecasts = await ForecastsRepository.create({
      neighbourhood,
      forecast,
    });
    response.json(forecasts);
  }
}

module.exports = new ForecastController();
