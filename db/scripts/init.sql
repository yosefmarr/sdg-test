CREATE DATABASE dashboard_db;

CREATE USER 'dashboard'@'%' IDENTIFIED BY 'Qyr$RDz#!3Y3RL4X';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP ON dashboard_db.* TO 'dashboard'@'%';

FLUSH privileges;

USE dashboard_db;