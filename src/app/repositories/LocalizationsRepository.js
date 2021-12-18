const db = require('../../database');

class LocalizationsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM localizations ORDER BY neighbourhood');
    return rows;
  }

  async create({ neighbourhood, state }) {
    const [row] = await db.query(`
      INSERT INTO localizations(neighbourhood, state)
      VALUES($1, $2)
      RETURNING *
    `, [neighbourhood, state]);
    return row;
  }
}

module.exports = new LocalizationsRepository();
