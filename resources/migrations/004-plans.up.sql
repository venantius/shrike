-- Add paid plans

CREATE TABLE shrike.plan (
    id      SERIAL      PRIMARY KEY,
    user_id INTEGER     NOT NULL REFERENCES shrike.user(id)
);

-- Allow for multiple commits to be connected to multiple builds via push events

CREATE TABLE shrike.build_commit (
    build_id  INTEGER   NOT NULL REFERENCES shrike.build(id),
    commit_id INTEGER   NOT NULL REFERENCES github.commit(id)
);

ALTER TABLE github.commit ADD COLUMN author_id INTEGER REFERENCES github.user(id) ON DELETE SET NULL;
