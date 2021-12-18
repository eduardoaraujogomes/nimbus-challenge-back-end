const LocalizationsRepository = require('../repositories/LocalizationsRepository');

class LocalizationController {
  async index(request, response) {
    const localizations = await LocalizationsRepository.findAll();
    response.json(localizations);
  }

  async store(request, response) {
    const { neighbourhood, state } = request.body;

    if (!neighbourhood || !state) {
      return response.status(400).json({ error: 'Neighbourhood and state are required' });
    }
    const localization = await LocalizationsRepository.create({ neighbourhood, state });
    response.json(localization);
  }
}

module.exports = new LocalizationController();
