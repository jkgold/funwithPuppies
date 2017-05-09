DROP DATABASE IF EXISTS puppies;
create DATABASE puppies;

  \c puppies;

  CREATE TABLE pups (
    ID SERIAL PRIMARY KEY,
    name VARCHAR,
    breed VARCHAR,
    age INTEGER,
    sex VARCHAR
  );

  INSERT INTO pups (name, breed, age, sex)
    VALUES ('Tyler', 'Retrieved', 3, 'M');
