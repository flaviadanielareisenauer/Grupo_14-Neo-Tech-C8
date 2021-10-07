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
  `updateAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_IDX` (`id`,`name`,`description`,`discount`,`price`,`color`,`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;


-- neotech.categories definition
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- neotech.categoryproducts definition

CREATE TABLE `categoryproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(10) NOT NULL,
  `categoryId` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryproducts_FK` (`productId`),
  KEY `categoryproducts_FK_1` (`categoryId`),
  CONSTRAINT `categoryproducts_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `categoryproducts_FK_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- neotech.productsimage definition

CREATE TABLE `productsimage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `productId` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productsimage_FK` (`productId`),
  CONSTRAINT `productsimage_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

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

