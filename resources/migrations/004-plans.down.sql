UPDATE github.commit SET id = 100001 WHERE sha = '394717ffc3fc54ffefac2ebba5a92470f904383a';

ALTER TABLE shrike.build RENAME COLUMN github_head_commit_id TO github_commit_id;
ALTER TABLE github.commit DROP COLUMN author_login;

DROP TABLE shrike.build_commmit;
DROP TABLE shrike.plan;
