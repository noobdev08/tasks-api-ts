CREATE TABLE tasks (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    done BOOLEAN
);

INSERT INTO tasks (title, done)
VALUES ('Learn PostgreSQL', true);

INSERT INTO tasks (title, done)
VALUES ('Learn Python', false);

INSERT INTO tasks (title, done)
VALUES ('Learn AI & Automation', false);

SELECT * FROM tasks;

SELECT * FROM tasks WHERE NOT done;

SELECT * FROM tasks WHERE done = false;