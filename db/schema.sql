DROP DATABASE IF EXISTS leverage_db;
CREATE DATABASE leverage_db;
USE leverage_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_title VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL
);

CREATE TABLE workout (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    workout_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE exercises (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR(100) NOT NULL,
    exercise_set INT NOT NULL,
    exercise_reps INT NOT NULL,
    exercise_weight INT NOT NULL,
    workout_id INT,
    FOREIGN KEY (workout_id)
    REFERENCES workout(id)
);


-- CREATE TABLE sevenDay (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     day VARCHAR(100) NOT NULL,
--     workout VARCHAR(100) NOT NULL,
--     workout_id INT,
--     FOREIGN KEY (workout_id)
--     REFERENCES workout(id)
--     ON DELETE SET NULL,
-- );
-- FUTURE ADDITIONS




