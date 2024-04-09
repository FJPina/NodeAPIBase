Create database Prueba;
use Prueba; 

CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `profesion` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Prueba`.`clientes`(`nombre`,`edad`,`profesion`)VALUES('Pedro',35,'Arquitecto');
insert into clientes (nombre, edad, profesion) values ('Juan', 28, 'Taquero');
insert into clientes (nombre, edad, profesion) values ('Saul', 26, 'Jugador');
insert into clientes (nombre, edad, profesion) values ('Arturo', 28, 'Repartidor');
insert into clientes (nombre, edad, profesion) values ('Daniel', 28, 'Musico');
insert into clientes (nombre, edad, profesion) values ('Efrain', 28, 'Tendero');