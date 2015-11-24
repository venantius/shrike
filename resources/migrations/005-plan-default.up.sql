ALTER TABLE shrike.plan ADD COLUMN type text DEFAULT 'Open source';
ALTER TABLE shrike.plan ADD COLUMN queue_url text DEFAULT 'Open source';

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
