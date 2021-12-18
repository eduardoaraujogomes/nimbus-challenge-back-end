CREATE DATABASE nimbus;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS locations (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  neighbourhood VARCHAR NOT NULL,
  state CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS forecasts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  day VARCHAR NOT NULL,
  hour VARCHAR NOT NULL,
  millimeters REAL NOT NULL,
  id_locations UUID NOT NULL,
  FOREIGN KEY(id_locations) REFERENCES locations(id)

);

INSERT INTO locations (neighbourhood, state)
VALUES ('São Gonçalo', 'RJ'), ('Niterói', 'RJ'), ('Copacabana', 'RJ');

INSERT INTO forecasts (day, hour, millimeters, id_locations)
VALUES
('08/12', '13h', 15.2,'405ee223-4f9a-48a7-bdd6-8fe5be30f5f7' ),
('08/12', '14h', 5.7, '405ee223-4f9a-48a7-bdd6-8fe5be30f5f7'),
('08/12', '15h', 0.1, '405ee223-4f9a-48a7-bdd6-8fe5be30f5f7'),
('08/12', '16h', 27.3, '405ee223-4f9a-48a7-bdd6-8fe5be30f5f7'),
('08/12', '13h', 15.2,
'a3575ebf-c07b-4b41-8d45-67d451ba54cc' ),
('08/12', '14h', 5.7,
'a3575ebf-c07b-4b41-8d45-67d451ba54cc'),
('08/12', '15h', 0.1,
'a3575ebf-c07b-4b41-8d45-67d451ba54cc'),
('08/12', '16h', 27.3,
'a3575ebf-c07b-4b41-8d45-67d451ba54cc'),
('08/12', '13h', 15.2,
'71ab0a3c-11ca-46aa-92da-9cbc7159dc7f' ),
('08/12', '14h', 5.7,
'71ab0a3c-11ca-46aa-92da-9cbc7159dc7f'),
('08/12', '15h', 0.1,
'71ab0a3c-11ca-46aa-92da-9cbc7159dc7f'),
('08/12', '16h', 27.3,
'71ab0a3c-11ca-46aa-92da-9cbc7159dc7f');
