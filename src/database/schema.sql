CREATE DATABASE forecasts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS addresses (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  neighboourhood VARCHAR NOT NULL,
  state CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS forecast (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  day VARCHAR NOT NULL,
  hour VARCHAR NOT NULL,
  millimeters REAL NOT NULL,
  id_addresses UUID,
  FOREIGN KEY(id_addresses) REFERENCES addresses(id)

);
