const { Client } = require('pg');

const client = new Client({
  host: 'ec2-52-4-197-13.compute-1.amazonaws.com',
  port: 5432,
  user: 'aitzksuxnjajgz',
  password: '09d369c8842e12b8f8ff53ab69446db070ca809ad61c70c552ad1102d7dbadfd',
  database: 'dc41j0dg8o1a9j',
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
