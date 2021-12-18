CREATE DATABASE forecasts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS localizations (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  neighbourhood VARCHAR NOT NULL,
  state CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS forecast (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  day VARCHAR NOT NULL,
  hour VARCHAR NOT NULL,
  millimeters REAL NOT NULL,
  id_localizations UUID,
  FOREIGN KEY(id_localizations) REFERENCES localizations(id)

);

INSERT INTO localizations (neighbourhood, state)
VALUES ('São Gonçalo', 'RJ'), ('Niteroi', 'RJ'), ('Copacabana', 'RJ');

INSERT INTO forecast (day, hour, millimeters, id_localizations)
VALUES
('08/12', '13h', 15.2,'4c8681af-de0d-427a-b42c-249940534864' ),
('08/12', '14h', 5.7, '4c8681af-de0d-427a-b42c-249940534864'),
('08/12', '15h', 0.1, '4c8681af-de0d-427a-b42c-249940534864'),
('08/12', '16h', 27.3, '4c8681af-de0d-427a-b42c-249940534864'),
('08/12', '13h', 15.2,
'b3d20767-e60c-47f3-89a6-7d55fe8bdc18' ),
('08/12', '14h', 5.7,
'b3d20767-e60c-47f3-89a6-7d55fe8bdc18'),
('08/12', '15h', 0.1,
'b3d20767-e60c-47f3-89a6-7d55fe8bdc18'),
('08/12', '16h', 27.3,
'b3d20767-e60c-47f3-89a6-7d55fe8bdc18'),
('08/12', '13h', 15.2,
'8c112bdc-af98-4fb2-9f66-882226c07f55' ),
('08/12', '14h', 5.7,
'8c112bdc-af98-4fb2-9f66-882226c07f55'),
('08/12', '15h', 0.1,
'8c112bdc-af98-4fb2-9f66-882226c07f55'),
('08/12', '16h', 27.3,
'8c112bdc-af98-4fb2-9f66-882226c07f55');
