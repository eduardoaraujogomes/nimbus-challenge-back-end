const { Client } = require('pg');

const client = new Client({
  host: 'ec2-52-201-106-191.compute-1.amazonaws.com',
  port: 5432,
  user: 'zgejutfsuiuzjw',
  password: 'b736eb8b174fd997913f9379dd8f1fa26f76bd69018daa94efc47a3964086c72',
  database: 'd28qc0ue8e85n9',
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
