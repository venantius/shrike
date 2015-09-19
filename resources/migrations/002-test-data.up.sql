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

INSERT INTO shrike.user VALUES (
  1,
  14307759,
  100001,
  'ursacorp-test-user'
);

INSERT INTO github.user VALUES (
  7268171,
  'ursacorp-test-user',
  'User'
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
  '394717ffc3fc54ffefac2ebba5a92470f904383a'
);
