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
VALUES(41, 'MONITOR 24" SAMSUNG', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 35, 22999, 'Negro', '100', '2021-10-20 18:21:12', '2021-10-20 18:21:12', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(42, 'MONITOR 28" SAMSUNG ULTRA HD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 32999, 'Negro', '101', '2021-10-20 18:29:13', '2021-10-20 18:29:13', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(43, 'MONITOR 27" SAMSUNG ULTRA HD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 30, 45999, 'Negro', '102', '2021-10-20 18:31:40', '2021-10-20 18:31:40', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(44, 'MONITOR 25 LG', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 15999, 'Negro', '103', '2021-10-20 18:34:55', '2021-10-20 18:34:55', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(45, 'MONITOR GAMER 27"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 36000, 'Negro', '105', '2021-10-20 18:37:40', '2021-10-20 18:37:40', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(47, 'TV 50" TCL SMART UHD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 28000, 'Negro', '108', '2021-10-20 19:09:07', '2021-10-20 19:09:07', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(48, 'TV SAMSUNG 65" UHD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 135000, 'Negro', '200', '2021-10-20 19:13:32', '2021-10-20 19:13:32', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(49, 'SAMSUNG TV LED 50 SMART', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 85000, 'Negro', '139', '2021-10-20 19:16:19', '2021-10-20 19:16:19', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(50, 'NOTEBOOK CX 2EN1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 42200, 'BLANCO', '200', '2021-10-20 19:25:43', '2021-10-20 19:25:43', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(51, 'NOTEBOOK HP 14" G8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 51000, 'Negro', '201', '2021-10-20 19:34:59', '2021-10-20 19:34:59', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(52, 'NOTEBOOK HP 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 45000, 'Negro', '205', '2021-10-20 19:37:08', '2021-10-20 19:37:08', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(53, 'NOTEBOOK DELL 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 45000, 'GRIS', '208', '2021-10-20 19:49:04', '2021-10-20 19:49:04', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(54, 'NOTEBOOK KELYX 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 78000, 'Negro', '209', '2021-10-20 19:51:28', '2021-10-20 19:51:28', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, createdAt, updatedAt, categoryId)
VALUES(55, 'NOTEBOOK ASPIRE 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 69000, 'Negro', '209', '2021-10-20 19:55:14', '2021-10-20 19:55:14', 4);




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
VALUES(65, 'nuevos/1634764870171_img_.jpg', 41);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(66, 'nuevos/1634764871782_img_.jpg', 41);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(67, 'nuevos/1634764871836_img_.jpg', 41);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(68, 'nuevos/1634764871979_img_.jpg', 41);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(69, 'nuevos/1634765353251_img_.jpg', 42);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(70, 'nuevos/1634765353255_img_.jpg', 42);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(71, 'nuevos/1634765353259_img_.jpg', 42);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(72, 'nuevos/1634765353261_img_.jpg', 42);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(73, 'nuevos/1634765500817_img_.jpg', 43);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(74, 'nuevos/1634765500830_img_.jpg', 43);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(75, 'nuevos/1634765500834_img_.jpg', 43);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(76, 'nuevos/1634765500844_img_.jpg', 43);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(77, 'nuevos/1634765695212_img_.jpg', 44);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(78, 'nuevos/1634765695220_img_.jpg', 44);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(79, 'nuevos/1634765695225_img_.jpg', 44);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(80, 'nuevos/1634765695227_img_.jpg', 44);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(81, 'nuevos/1634765860031_img_.jpg', 45);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(82, 'nuevos/1634765860215_img_.jpg', 45);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(83, 'nuevos/1634765860328_img_.jpg', 45);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(84, 'nuevos/1634765860387_img_.jpg', 45);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(88, 'nuevos/1634767747918_img_.jpg', 47);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(89, 'nuevos/1634767747921_img_.jpg', 47);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(90, 'nuevos/1634767747922_img_.jpg', 47);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(91, 'nuevos/1634767747924_img_.jpg', 47);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(92, 'nuevos/1634768011841_img_.jpg', 48);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(93, 'nuevos/1634768011994_img_.jpg', 48);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(94, 'nuevos/1634768012065_img_.jpg', 48);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(95, 'nuevos/1634768012108_img_.jpg', 48);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(96, 'nuevos/1634768179542_img_.jpg', 49);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(97, 'nuevos/1634768179620_img_.jpg', 49);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(98, 'nuevos/1634768179650_img_.jpg', 49);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(99, 'nuevos/1634768179671_img_.jpg', 49);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(100, 'nuevos/1634768743023_img_.jpg', 50);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(101, 'nuevos/1634768743132_img_.jpg', 50);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(102, 'nuevos/1634768743215_img_.jpg', 50);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(103, 'nuevos/1634768743249_img_.jpg', 50);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(104, 'nuevos/1634769299526_img_.jpg', 51);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(105, 'nuevos/1634769299528_img_.jpg', 51);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(106, 'nuevos/1634769299529_img_.jpg', 51);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(107, 'nuevos/1634769299530_img_.jpg', 51);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(108, 'nuevos/1634769428383_img_.jpg', 52);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(109, 'nuevos/1634769428386_img_.jpg', 52);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(110, 'nuevos/1634769428387_img_.jpg', 52);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(111, 'nuevos/1634769428388_img_.jpg', 52);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(112, 'nuevos/1634770144830_img_.jpg', 53);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(113, 'nuevos/1634770144833_img_.jpg', 53);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(114, 'nuevos/1634770144834_img_.jpg', 53);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(115, 'nuevos/1634770144837_img_.jpg', 53);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(116, 'nuevos/1634770288617_img_.jpg', 54);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(117, 'nuevos/1634770288618_img_.jpg', 54);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(118, 'nuevos/1634770288620_img_.jpg', 54);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(119, 'nuevos/1634770288621_img_.jpg', 54);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(120, 'nuevos/1634770514220_img_.jpg', 55);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(121, 'nuevos/1634770514222_img_.jpg', 55);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(122, 'nuevos/1634770514257_img_.jpg', 55);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(123, 'nuevos/1634770514277_img_.jpg', 55);


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

