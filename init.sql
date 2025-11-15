CREATE DATABASE IF NOT EXISTS basededatos;

USE basededatos;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nombre) VALUES ('Ana López'), ('Juan Pérez'), ('María García');