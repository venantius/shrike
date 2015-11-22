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

ALTER TABLE github.commit ADD COLUMN author_login TEXT;
ALTER TABLE shrike.build RENAME COLUMN github_commit_id TO github_head_commit_id;

-- fix the fact that we inserted stuff on a primary key like n00bs
INSERT INTO github.commit (
    repo_id,
    sha,
    message,
    author_name
    ) VALUES (
    42705074,
    '394717ffc3fc54ffefac2ebba5a92470f904383a',
    'Initial commit',
    'Ursa Americanus Kermodei'
);
DELETE FROM github.commit WHERE id = 100001;
