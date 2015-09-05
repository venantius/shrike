CREATE SCHEMA clip;

CREATE TABLE clip.user (
  id        SERIAL      PRIMARY KEY,
  github_id INTEGER     UNIQUE NOT NULL,
  name      TEXT        NOT NULL,
  email     TEXT        NOT NULL
);
