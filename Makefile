all: init

init:
	createdb shrike
	createdb shrike_test

rebuild:
	dropdb shrike
	dropdb shrike_test
	make init

