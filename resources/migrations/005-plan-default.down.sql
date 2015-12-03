DELETE FROM shrike.plan where user_id in (1, 3);


ALTER TABLE shrike.plan
DROP CONSTRAINT plan_user_id_fkey,
ADD CONSTRAINT plan_user_id_fkey
   FOREIGN KEY (user_id)
   REFERENCES shrike.user(id);

ALTER TABLE shrike.plan DROP COLUMN plan_type;
ALTER TABLE shrike.plan DROP COLUMN queue_url;

DELETE FROM shrike.build where github_head_commit_id = 1;
