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

create type ingredient_t as enum('Meat', 'Fish', 'Vegetable', 'Fruit', 'Chicken');

CREATE TABLE ingredient(
    id SERIAL PRIMARY KEY,
    name text,
    ingredient_type ingredient_t,
    is_vegan boolean NOT NULL DEFAULT FALSE
);

CREATE OR REPLACE FUNCTION function_update()
  RETURNS trigger AS
$BODY$
BEGIN
    new.is_vegan = new.ingredient_type IN ('Vegetable', 'Fruit');
    RETURN new;
END;
$BODY$
LANGUAGE plpgsql;

CREATE TRIGGER triggerinsert
  BEFORE INSERT
  ON ingredient
  FOR EACH ROW
  EXECUTE PROCEDURE function_update();

CREATE TABLE dish(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text,
    price numeric NOT NULL
);

CREATE TABLE dish_ingredients(
    id SERIAL,
    ingredient_id integer NOT NULL references ingredient(id),
    dish_id integer NOT NULL references dish(id)
);

INSERT INTO ingredient(name, ingredient_type) VALUES ('kana', 'Chicken');
INSERT INTO ingredient(name, ingredient_type) VALUES ('Potato', 'Vegetable');
INSERT INTO test(teksti) VALUES ('AAA');
INSERT INTO todo(title, is_completed) values ('eka', false);
INSERT INTO todo(title, is_completed) values ('toka', true);
INSERT INTO todo(title, is_completed) values ('kolmas', false);