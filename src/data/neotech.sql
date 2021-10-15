CREATE DATABASE `neotech` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;


use `neotech`;

-- neotech.products definition
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `color` varchar(60) DEFAULT NULL,
  `code` varchar(60) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
   `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_IDX` (`id`,`name`,`description`,`discount`,`price`,`color`,`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Silla Gamer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 15, 7399, 'black', '56934', '2021-10-13 17:19:27', '2021-10-13 17:19:27', 11);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Parlante Bluetooth', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 25, 1700, 'black', '90123', '2021-10-13 17:20:34', '2021-10-13 17:20:34', 11);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Mouse', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 10, 800, 'white', '12346', '2021-10-13 17:21:10', '2021-10-13 17:21:10', 11);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Teclado', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 10, 1000, 'blue', '123223', '2021-10-13 17:21:46', '2021-10-13 17:21:46', 11);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Auricular Noga', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 15, 4000, 'black', '61231', '2021-10-13 20:13:32', '2021-10-13 20:13:32', 11);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Samsung Galaxy S21 GA-vista1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 15, 29000, 'black', '21311', '2021-10-13 20:18:37', '2021-10-13 20:18:37', 6);
INSERT INTO products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(default, 'Mouse', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora?', 0, 800, 'white', '12345', '2021-10-13 20:22:19', '2021-10-13 20:22:19', 11);




-- neotech.categories definition
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
INSERT INTO categories
(id, name)
VALUES(default, 'combos');
INSERT INTO categories
(id, name)
VALUES(default, 'computadoras');
INSERT INTO categories
(id, name)
VALUES(default, 'notebooks');
INSERT INTO categories
(id, name)
VALUES(default, 'tablets');
INSERT INTO categories
(id, name)
VALUES(default, 'celulares');
INSERT INTO categories
(id, name)
VALUES(default, 'consolas');
INSERT INTO categories
(id, name)
VALUES(default, 'ofertas');
INSERT INTO categories
(id, name)
VALUES(default, 'impresoras');
INSERT into categories
(id, name)
VALUES(default, 'televisores');
INSERT INTO categories
(id, name)
VALUES(default, 'accesorios');



-- neotech.categoryproducts definition


-- neotech.productsimage definition

CREATE TABLE `productsimage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `productId` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productsimage_FK` (`productId`),
  CONSTRAINT `productsimage_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'Sillas/silla-vista1.jpg', 8);
INSERT into productsimage
(id, name, productId)
VALUES(default, 'parlantes/parlante1-vista2.jpg', 9);
INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'MouseTeclados/mouse3-vista1.jpg', 10);
INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'MouseTeclados/teclado1-vista1.jpg', 11);
INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'Auriculares/auri2-vista1.jpg', 12);
INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'celulares/Samsung S21 GA-vista1.jpg', 13);
INSERT INTO productsimage
(id, name, productId)
VALUES(default, 'MouseTeclados/mouse2-vista1.jpg', 14);

-- neotech.users definition

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(75) NOT NULL,
  `dni` varchar(20) DEFAULT NULL,
  `numberPhone` int(20) DEFAULT NULL,
  `location` varchar(60) DEFAULT NULL,
  `rol` int(2) NOT NULL,
  `avatar` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)

) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


-- neotech.addresses definition
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `streetName` varchar(60) DEFAULT NULL,
  `streetNumber` int(60) DEFAULT NULL,
  `dto` varchar(11) DEFAULT NULL,
  `postalCode` int(20) DEFAULT NULL,
  `province` varchar(60) DEFAULT NULL,
  `userId` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_FK` (`userId`),
  CONSTRAINT `addresses_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

