DROP TABLE IF EXISTS test;

CREATE TABLE test(
    id SERIAL,
    teksti text
);

CREATE TABLE todo(
    id SERIAL,
    title text NOT NULL,
    is_completed boolean NOT NULL
);

INSERT INTO test(teksti) VALUES ('AAA');
INSERT INTO todo(title, is_completed) values ('eka', false);
INSERT INTO todo(title, is_completed) values ('toka', true);
INSERT INTO todo(title, is_completed) values ('kolmas', false);