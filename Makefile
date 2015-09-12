all: init

init:
	createdb shrike
	createdb shrike_test

migrate:
	lein run -m titan.db.migrations/migrate

rollback:
	lein run -m titan.db.migrations/rollback

rebuild:
	dropdb shrike || :
	dropdb shrike_test || :
	make init
	make migrate

