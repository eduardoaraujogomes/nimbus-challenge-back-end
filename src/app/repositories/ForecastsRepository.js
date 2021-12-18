const { v4 } = require('uuid');
const db = require('../../database');

const forecasts = [
  {
    id: v4(),
    neighbourhood: 'Copacabana/RJ',
    forecast: [
      { day: '08/12', hour: '13h', millimeters: 15 },
      { day: '08/12', hour: '14h', millimeters: 0 },
      { day: '08/12', hour: '15h', millimeters: 2 },
      { day: '08/12', hour: '16h', millimeters: 27 },
      { day: '08/12', hour: '17h', millimeters: 20 },
      { day: '08/12', hour: '18h', millimeters: 6 },
    ],
  },
  {
    id: v4(),
    neighbourhood: 'São Gonçalo/RJ',
    forecast: [
      { day: '08/12', hour: '11h', millimeters: 0 },
      { day: '08/12', hour: '12h', millimeters: 0 },
      { day: '08/12', hour: '13h', millimeters: 2 },
      { day: '08/12', hour: '14h', millimeters: 27 },
      { day: '08/12', hour: '15h', millimeters: 20 },
      { day: '08/12', hour: '16h', millimeters: 6 },
      { day: '08/12', hour: '17h', millimeters: 15 },
      { day: '08/12', hour: '18h', millimeters: 0 },
      { day: '08/12', hour: '19h', millimeters: 2 },
      { day: '08/12', hour: '20h', millimeters: 27 },
      { day: '08/12', hour: '21h', millimeters: 20 },
      { day: '08/12', hour: '22h', millimeters: 6 },
    ],
  },
  {
    id: v4(),
    neighbourhood: 'Niteroi/RJ',
    forecast: [
      { day: '08/12', hour: '13h', millimeters: 15 },
      { day: '08/12', hour: '14h', millimeters: 0 },
      { day: '08/12', hour: '13h', millimeters: 15 },
      { day: '08/12', hour: '14h', millimeters: 0 },
      { day: '08/12', hour: '13h', millimeters: 15 },
      { day: '08/12', hour: '14h', millimeters: 0 },
    ],
  },
];

class ForecastsRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT localizations.neighbourhood AS neighbourhood,
      localizations.state AS state, forecast.*
      FROM forecast
      INNER JOIN localizations
      ON  localizations.id = forecast.id_localizations
      ORDER BY localizations.neighbourhood
    `);
    return rows;
  }

  findByNeighbourhood(neighbourhood) {
    return new Promise((resolve) => (
      resolve(forecasts.find((
        (forecast) => forecast.neighbourhood === neighbourhood)))));
  }

  create({
    neighbourhood,
    forecast,
  }) {
    return new Promise((resolve) => {
      const newForecast = {
        id: v4(),
        neighbourhood,
        forecast,
      };
      forecasts.push(newForecast);
      resolve(newForecast);
    });
  }
}

module.exports = new ForecastsRepository();
