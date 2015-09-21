INSERT INTO github.access_token VALUES (
  100001,
  'a25e44d2a05e073dcb2db5f07089ea200dda9aba',
  'read:org,repo,user'
);

INSERT INTO github.user VALUES (
  14307759,
  'ursacorp-test-user',
  'User'
);

INSERT INTO github.user VALUES (
  7268171,
  'ursacorp',
  'Organization'
);

INSERT INTO github.user VALUES (
  1824859,
  'venantius',
  'User'
);

-- id 1
INSERT INTO shrike.user (github_user_id, github_access_token_id, name) VALUES (
  14307759,
  100001,
  'ursacorp-test-user'
);

--id 2
INSERT INTO shrike.user (github_user_id, name) VALUES (
  1824859,
  'venantius'
);

INSERT INTO github.repo VALUES (
  42705074,
  7268171,
  'test-repo',
  true,
  false
);

INSERT INTO github.commit VALUES (
  100001,
  42705074,
  '394717ffc3fc54ffefac2ebba5a92470f904383a',
  'Initial commit'
);

INSERT INTO shrike.followed_repo (
  user_id,
  github_repo_id
  ) VALUES (
  2,
  42705074
);

INSERT INTO shrike.build (
  repo_build_id,
  github_repo_id,
  github_commit_id,
  lines_of_code,
  definitions
  ) VALUES (
  100001,
  42705074,
  100001,
  0,
  0
);

INSERT INTO shrike.build (
  repo_build_id,
  github_repo_id,
  github_commit_id,
  status,
  lines_of_code,
  definitions
  ) VALUES (
  100002,
  42705074,
  100001,
  'Running',
  10,
  5
);
