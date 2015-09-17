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


CREATE SCHEMA shrike;

CREATE TABLE shrike.user (
  id        SERIAL      PRIMARY KEY,
  github_id INTEGER     UNIQUE REFERENCES github.user(id) ON DELETE CASCADE,
  name      TEXT        NOT NULL,
  email     TEXT        NOT NULL
);

CREATE TABLE shrike.followed_repo (
  id              INTEGER   PRIMARY KEY,
  github_user_id  INTEGER   REFERENCES github.user(id) ON DELETE CASCADE,
  github_repo     INTEGER   REFERENCES github.repo(id) ON DELETE CASCADE
);

CREATE TABLE shrike.build (
  id                SERIAL      PRIMARY KEY,
  repo_build_id     INTEGER     NOT NULL,
  github_repo_id    INTEGER     REFERENCES github.repo(id) ON DELETE CASCADE,
  github_commit_id  INTEGER     REFERENCES github.commit(id) ON DELETE CASCADE,
  lines_of_code     BIGINT      NOT NULL DEFAULT 0,
  definitions       BIGINT      NOT NULL DEFAULT 0
);

