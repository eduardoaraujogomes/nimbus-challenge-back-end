const db = require('../../database');

class LocationsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM locations ORDER BY neighbourhood');
    return rows;
  }

  async create({ neighbourhood, state }) {
    const [row] = await db.query(`
      INSERT INTO locations(neighbourhood, state)
      VALUES($1, $2)
      RETURNING *
    `, [neighbourhood, state]);
    return row;
  }
}

module.exports = new LocationsRepository();
