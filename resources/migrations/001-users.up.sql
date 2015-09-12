CREATE SCHEMA shrike;

CREATE TABLE shrike.user (
  id        SERIAL      PRIMARY KEY,
  github_id INTEGER     UNIQUE NOT NULL,
  name      TEXT        NOT NULL,
  email     TEXT        NOT NULL
);

CREATE SCHEMA github;

CREATE TABLE github.oauth_state (
  id    SERIAL    PRIMARY KEY,
  state TEXT      NOT NULL
);

CREATE TABLE github.access_token (
  id          SERIAL      PRIMARY KEY,
  token       TEXT        NOT NULL,
  scope       TEXT
);

CREATE TABLE github.user (
  id              SERIAL    PRIMARY KEY,
  access_token_id INTEGER   REFERENCES github.access_token(id) ON DELETE CASCADE,
  login           TEXT      NOT NULL
);

CREATE TABLE github.owner (
  id        INTEGER   PRIMARY KEY,
  type      TEXT      ,
  login     TEXT
);

CREATE TABLE github.repo (
  id        INTEGER   PRIMARY KEY,
  owner_id  INTEGER   UNIQUE REFERENCES github.owner(id) ON DELETE CASCADE,
  name      TEXT      ,
  full_name TEXT      ,
  private   BOOLEAN   ,
  fork      BOOLEAN
);

CREATE TABLE github.commit (
  id        INTEGER   PRIMARY KEY,
  repo_id   INTEGER   UNIQUE REFERENCES github.repo(id) ON DELETE CASCADE,
  sha       TEXT      NOT NULL
);
