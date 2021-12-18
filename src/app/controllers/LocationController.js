const LocationsRepository = require('../repositories/LocationsRepository');

class LocationController {
  async index(request, response) {
    const locations = await LocationsRepository.findAll();
    response.json(locations);
  }

  async store(request, response) {
    const { neighbourhood, state } = request.body;

    if (!neighbourhood || !state) {
      return response.status(400).json({ error: 'Neighbourhood and state are required' });
    }

    const neighbourhoodExists = await LocationsRepository.findByNeighbourhood(neighbourhood);

    if (neighbourhoodExists) {
      return response.status(404).json({ error: 'This neighbourhood already exists' });
    }

    const localization = await LocationsRepository.create({ neighbourhood, state });
    response.json(localization);
  }
}

module.exports = new LocationController();
