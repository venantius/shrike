all: init

init:
	createdb clip
	createdb clip_test

rebuild:
	dropdb clip
	dropdb clip_test
	make init

