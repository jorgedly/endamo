CREATE DATABASE prueba_analisis;

USE prueba_analisis;

CREATE TABLE prueba(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100),
    contrasenia VARCHAR(100)
);

DESCRIBE prueba;