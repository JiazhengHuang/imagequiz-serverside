CREATE TABLE imagequiz.flowers (
	id bigserial primary key,
	name text not NULL,
	picture text not null
);

CREATE TABLE imagequiz.questions (
	id bigserial primary key,
	flowerid int not null,
	choices text not null,
	answer text not null
);

CREATE TABLE imagequiz.quizzes (
	id bigserial primary key,
	quiznumber int not null,
	questionid int not null
);

CREATE TABLE imagequiz.customers (
	id bigserial primary key,
	name text not null,
	email text not null,
	password text not null
);

CREATE TABLE imagequiz.scores (
	id bigserial primary key,
	customerid int not null,
	quizid int not null,
	score int not null
);