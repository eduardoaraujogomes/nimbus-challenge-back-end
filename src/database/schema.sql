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
('08/12', '13h', 15.2,'f6f03dce-ee7a-4ae5-ad02-55ee7b97af2d' ),
('08/12', '14h', 5.7, 'f6f03dce-ee7a-4ae5-ad02-55ee7b97af2d'),
('08/12', '15h', 0.1, 'f6f03dce-ee7a-4ae5-ad02-55ee7b97af2d'),
('08/12', '16h', 27.3, 'f6f03dce-ee7a-4ae5-ad02-55ee7b97af2d'),
('08/12', '13h', 15.2,
'e3007a86-4bf3-4fc9-94db-da965f46800f' ),
('08/12', '14h', 5.7,
'e3007a86-4bf3-4fc9-94db-da965f46800f'),
('08/12', '15h', 0.1,
'e3007a86-4bf3-4fc9-94db-da965f46800f'),
('08/12', '16h', 27.3,
'e3007a86-4bf3-4fc9-94db-da965f46800f'),
('08/12', '13h', 15.2,
'b2cfec45-7e0f-470f-b4cd-df044ca076c2' ),
('08/12', '14h', 5.7,
'b2cfec45-7e0f-470f-b4cd-df044ca076c2'),
('08/12', '15h', 0.1,
'b2cfec45-7e0f-470f-b4cd-df044ca076c2'),
('08/12', '16h', 27.3,
'b2cfec45-7e0f-470f-b4cd-df044ca076c2');
