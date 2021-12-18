const db = require('../../database');

class ForecastsRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT locations.neighbourhood AS neighbourhood,
      locations.state AS state, forecasts.*
      FROM forecasts
      INNER JOIN locations
      ON  locations.id = forecasts.id_locations
      ORDER BY locations.neighbourhood
    `);
    return rows;
  }

  async findByHour(hour) {
    const [row] = await db.query(`
    SELECT * FROM forecasts
    WHERE hour = $1
    `, [hour]);
    return row;
  }

  async checkValidLocalizationId(id_locations) {
    const [row] = await db.query(`
      SELECT * FROM locations
      WHERE id = $1
    `, [id_locations]);
    return row;
  }

  async create({
    day, hour, millimeters, id_locations,
  }) {
    const [row] = await db.query(`
      INSERT INTO forecasts(day, hour, millimeters, id_locations)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [day, hour, millimeters, id_locations]);
    return row;
  }
}

module.exports = new ForecastsRepository();
