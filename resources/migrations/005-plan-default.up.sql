ALTER TABLE shrike.plan ADD COLUMN plan_type text DEFAULT 'Open source';
ALTER TABLE shrike.plan ADD COLUMN queue_url text;

ALTER TABLE shrike.plan
DROP CONSTRAINT plan_user_id_fkey,
ADD CONSTRAINT plan_user_id_fkey
   FOREIGN KEY (user_id)
   REFERENCES shrike.user(id)
   ON DELETE CASCADE;

-- should only have two users at the moment
INSERT INTO shrike.plan (
    user_id
) VALUES (
    1
), (
    2
);

INSERT INTO shrike.build (
  repo_build_id,
  coverage,
  github_repo_id,
  github_head_commit_id,
  lines_of_code,
  definitions
  ) VALUES (
  100001,
  70.5,
  42705074,
  1,
  0,
  0
);

INSERT INTO shrike.build (
  repo_build_id,
  github_repo_id,
  github_head_commit_id,
  status,
  lines_of_code,
  definitions
  ) VALUES (
  100002,
  42705074,
  1,
  'Running',
  10,
  5
);
