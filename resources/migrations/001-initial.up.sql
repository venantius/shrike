
-- NOTE: For all non-OAuth tables in the GitHub schema, an ID should be
-- understood to be the GitHub object ID.
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
  id              INTEGER   PRIMARY KEY,
  login           TEXT      NOT NULL,
  type            TEXT      NOT NULL
);

CREATE TABLE github.repo (
  id        INTEGER   PRIMARY KEY,
  owner_id  INTEGER   NOT NULL REFERENCES github.user(id) ON DELETE CASCADE,
  name      TEXT      NOT NULL,
  full_name TEXT      NOT NULL,
  private   BOOLEAN   NOT NULL,
  fork      BOOLEAN   NOT NULL
);

CREATE TABLE github.commit (
  id        SERIAL    PRIMARY KEY,
  repo_id   INTEGER   NOT NULL REFERENCES github.repo(id) ON DELETE CASCADE,
  sha       TEXT      NOT NULL,
  message   TEXT
);


CREATE SCHEMA shrike;

CREATE TABLE shrike.user (
  id                      SERIAL      PRIMARY KEY,
  github_user_id          INTEGER     UNIQUE REFERENCES github.user(id) ON DELETE CASCADE,
  github_access_token_id  INTEGER     REFERENCES github.access_token(id) ON DELETE CASCADE,
  name                    TEXT        NOT NULL
);

-- TODO: Create an index on this.
CREATE TABLE shrike.followed_repo (
  user_id         INTEGER   NOT NULL REFERENCES shrike.user(id) ON DELETE CASCADE,
  github_repo_id  INTEGER   NOT NULL REFERENCES github.repo(id) ON DELETE CASCADE
);

CREATE TABLE shrike.build (
  id                SERIAL      PRIMARY KEY,
  repo_build_id     INTEGER     NOT NULL,
  github_repo_id    INTEGER     NOT NULL REFERENCES github.repo(id) ON DELETE CASCADE,
  github_commit_id  INTEGER     NOT NULL REFERENCES github.commit(id) ON DELETE CASCADE,
  started_at        TIMESTAMP   NOT NULL DEFAULT NOW(),
  finished_at       TIMESTAMP   ,
  status            TEXT        NOT NULL DEFAULT 'Starting',
  lines_of_code     BIGINT      NOT NULL DEFAULT 0,
  definitions       BIGINT      NOT NULL DEFAULT 0
);

