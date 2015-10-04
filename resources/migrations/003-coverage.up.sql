-- can be nil on purpose. may not implement coverage for all langs.
ALTER TABLE shrike.build ADD COLUMN coverage FLOAT;

-- update fixture data
UPDATE shrike.build SET coverage = 70.5 WHERE repo_build_id = 100001;
UPDATE shrike.build SET coverage = 92.3 WHERE repo_build_id = 100002;

ALTER TABLE github.commit ADD COLUMN author_name TEXT;
