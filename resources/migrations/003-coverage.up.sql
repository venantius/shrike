-- can be nil on purpose. may not implement coverage for all langs.
ALTER TABLE shrike.build ADD COLUMN coverage FLOAT;

-- update fixture data
UPDATE shrike.build SET coverage = 70.5 WHERE repo_build_id = 100001;

ALTER TABLE github.commit ADD COLUMN author_name TEXT;
UPDATE github.commit SET author_name = 'Ursa Americanus Kermodei' WHERE sha = '394717ffc3fc54ffefac2ebba5a92470f904383a';
