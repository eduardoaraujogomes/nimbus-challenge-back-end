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
('08/12', '13h', 15.2,'b4928da6-c460-48f3-a53d-effcfdfa323e' ),
('08/12', '14h', 5.7, 'b4928da6-c460-48f3-a53d-effcfdfa323e'),
('08/12', '15h', 0.1, 'b4928da6-c460-48f3-a53d-effcfdfa323e'),
('08/12', '16h', 27.3, 'b4928da6-c460-48f3-a53d-effcfdfa323e'),
('08/12', '13h', 15.2,
'8fb135b2-b514-4df4-ab42-fd0dce8bb535' ),
('08/12', '14h', 5.7,
'8fb135b2-b514-4df4-ab42-fd0dce8bb535'),
('08/12', '15h', 0.1,
'8fb135b2-b514-4df4-ab42-fd0dce8bb535'),
('08/12', '16h', 27.3,
'8fb135b2-b514-4df4-ab42-fd0dce8bb535'),
('08/12', '13h', 15.2,
'4673ee65-1d13-4292-bf56-ffb917f4f549' ),
('08/12', '14h', 5.7,
'4673ee65-1d13-4292-bf56-ffb917f4f549'),
('08/12', '15h', 0.1,
'4673ee65-1d13-4292-bf56-ffb917f4f549'),
('08/12', '16h', 27.3,
'4673ee65-1d13-4292-bf56-ffb917f4f549');
