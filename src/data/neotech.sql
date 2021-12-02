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
  `marca` varchar(40) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_IDX` (`id`,`name`,`description`,`discount`,`price`,`color`,`code`,`marca`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(41, 'MONITOR 24" SAMSUNG', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 35, 22999, 'Negro', '100', 'SAMSUNG', '2021-10-20 18:21:12', '2021-10-20 18:21:12', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(42, 'MONITOR 28" SAMSUNG ULTRA HD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 32999, 'Negro', '101', 'SAMSUNG', '2021-10-20 18:29:13', '2021-10-20 18:29:13', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(43, 'MONITOR 27" SAMSUNG ULTRA HD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 30, 45999, 'Negro', '102', 'SAMSUNG', '2021-10-20 18:31:40', '2021-10-20 18:31:40', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(44, 'MONITOR 25 LG', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 15999, 'Negro', '103', 'LG', '2021-10-20 18:34:55', '2021-10-20 18:34:55', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(45, 'MONITOR GAMER 27"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 36000, 'Negro', '105', NULL, '2021-10-20 18:37:40', '2021-10-20 18:37:40', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(47, 'TV 50" TCL SMART UHD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 28000, 'Negro', '108', 'TCL', '2021-10-20 19:09:07', '2021-10-20 19:09:07', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(48, 'TV SAMSUNG 65" UHD', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 135000, 'Negro', '200', 'SAMSUNG', '2021-10-20 19:13:32', '2021-10-20 19:13:32', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(49, 'SAMSUNG TV LED 50 SMART', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 85000, 'Negro', '139', 'SAMSUNG', '2021-10-20 19:16:19', '2021-10-20 19:16:19', 10);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(50, 'NOTEBOOK CX 2EN1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 42200, 'BLANCO', '200', NULL, '2021-10-20 19:25:43', '2021-10-20 19:25:43', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(51, 'NOTEBOOK HP 14" G8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 51000, 'Negro', '201', 'HP', '2021-10-20 19:34:59', '2021-10-20 19:34:59', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(52, 'NOTEBOOK HP 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 45000, 'Negro', '205', 'HP', '2021-10-20 19:37:08', '2021-10-20 19:37:08', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(53, 'NOTEBOOK DELL 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 45000, 'GRIS', '208', 'DELL', '2021-10-20 19:49:04', '2021-10-20 19:49:04', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(54, 'NOTEBOOK KELYX 14"', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 78000, 'Negro', '209', 'KELLYX', '2021-10-20 19:51:28', '2021-10-20 19:51:28', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(55, 'NOTEBOOK ASPIRE 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 69000, 'Negro', '209', 'ASPIRE', '2021-10-20 19:55:14', '2021-10-20 19:55:14', 4);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(56, 'CELULAR Moto G4 PLUS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?  ', 10, 16000, '  Negro  ', '1234', 'Motorola', '2021-11-25 17:46:21', '2021-11-25 21:21:19', 6);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(57, 'CELULAR Samsung J9 Prime', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 20, 22000, ' Dorado ', '56789', 'Samsung', '2021-11-25 18:03:07', '2021-11-25 21:21:56', 6);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(58, 'CELULAR Iphone 12 Pro Max', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 40, 300000, ' Blanco ', '67895', 'Apple', '2021-11-25 18:10:59', '2021-11-25 21:22:32', 6);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(59, 'CELULAR Huawei P40 Pro', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 399999, ' Rojo ', '57432', 'Huawei', '2021-11-25 18:35:46', '2021-11-25 21:23:26', 6);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(60, 'CELULAR Samsung S20', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 40, 90000, ' Morado ', '453920', 'Samsung', '2021-11-25 18:40:58', '2021-11-25 21:23:54', 6);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(61, 'PC Intel Core i9', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 35, 188000, 'Blanco', '34958583', 'Intel', '2021-11-25 18:50:45', '2021-11-25 18:50:45', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(62, 'PC Cyerpower Intel i7', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 100000, ' Negro ', '89454', 'Intel', '2021-11-25 19:02:50', '2021-11-25 19:02:50', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(63, 'PC Skytech Intel i8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 20, 120000, ' Negro ', '43910', 'Intel', '2021-11-25 19:18:07', '2021-11-25 19:18:07', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(64, 'PC Razer Lian Li', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 10, 200000, ' Negro ', '48592', 'Lian Li', '2021-11-25 19:21:45', '2021-11-25 19:21:45', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(65, 'PC MSI MAG Series FORGE 100R', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 30, 300000, '   Negro   ', '342819', 'MSI', '2021-11-25 19:36:11', '2021-11-25 21:19:28', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(66, 'PC MSI MPG Series SEKIRA 100R', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 30, 250000, '    Negro    ', '457290', 'MSI', '2021-11-25 19:45:06', '2021-11-25 21:20:46', 3);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(67, 'CONSOLA Nintendo Switch', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 80000, '  Blanco  ', '68472', 'Nintendo', '2021-11-25 19:49:54', '2021-11-25 21:24:34', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(68, 'CONSOLA PS4 PRO', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 70000, '  Negro  ', '84920', 'Sony', '2021-11-25 19:55:10', '2021-11-25 21:25:06', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(69, 'CONSOLA Playstation 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 160000, ' Blanco ', '49302', 'Sony', '2021-11-25 19:59:04', '2021-11-25 21:25:32', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(70, 'CONSOLA Xbox One', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 35, 120000, ' Blanco ', '482894', 'Microsoft', '2021-11-25 20:40:54', '2021-11-25 21:26:11', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(71, 'CONSOLA Xbox Series X', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?  ', 10, 120000, '   Negro   ', '64920', 'Microsoft', '2021-11-25 20:46:13', '2021-11-25 21:26:38', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(72, 'CONSOLA Nintendo 3DS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 30, 20000, ' Azul ', '42053', 'Nintendo', '2021-11-25 20:50:57', '2021-11-25 21:27:12', 7);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(73, 'COMBO Teclado + Mouse', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?  ', 0, 30000, '   Negro   ', '45326', 'LexonElec', '2021-11-25 20:59:30', '2021-11-25 21:28:05', 2);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(74, 'COMBO Cargador + Auricular', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 15000, ' Blanco ', '39240', 'Samsung', '2021-11-25 21:10:37', '2021-11-25 21:28:49', 2);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(75, 'COMBO TV + CONSOLA PS4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?', 25, 200000, ' Negro ', '58483', 'Sony', '2021-11-25 21:45:05', '2021-11-25 21:45:05', 2);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(76, 'COMBO PC + MONITOR', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 200000, '  Negro  ', '12359', 'Intel', '2021-11-25 22:00:28', '2021-11-25 22:01:05', 2);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(77, 'ARICULARES HAVIT I93', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?   ', 10, 5000, '   negro   ', '23584', 'Foneda', '2021-11-25 22:11:21', '2021-11-25 22:21:01', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(78, 'Joystick DualShock PS4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 30000, '  Negro  ', '4832', 'Sony', '2021-11-25 22:19:08', '2021-11-25 22:19:28', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(79, 'Teclado Gamer Luces', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 20000, '  Negro  ', '24615', 'KLIM', '2021-11-25 22:32:16', '2021-11-25 22:32:47', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(80, 'Mouse Gamer BENGOO', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 20, 20000, '  Negro  ', '53267', 'BENGOO', '2021-11-25 22:39:38', '2021-11-25 22:39:57', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(81, 'PARLANTE de Computadora', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis?
 ', 25, 15000, '  Negro  ', '64832', 'INSMART', '2021-11-25 22:50:06', '2021-11-25 22:50:25', 11);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(82, 'TABLET SAMSUNG Galaxy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 0, 40000, ' Gris ', '23561', 'Samsung', '2021-11-25 23:17:18', '2021-11-25 23:17:42', 5);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(83, 'TABLET Samsung TAB A7', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 40000, ' Blanco ', '853264', 'Samsung', '2021-11-25 23:23:51', '2021-11-25 23:47:58', 5);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(84, 'TABLET iPad PRO 2021', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 100000, ' Gris ', '3458864', 'Apple', '2021-11-25 23:39:57', '2021-11-25 23:40:21', 5);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(85, 'TABLET Xiaomi Pad 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 100000, ' Gris ', '57423', 'Xiaomi', '2021-11-25 23:44:40', '2021-11-25 23:47:18', 5);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(86, 'TABLET MatePad T10s', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 30, 75000, '  Negro  ', '54326', 'Huawei', '2021-11-25 23:53:15', '2021-11-25 23:53:37', 5);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(87, 'IMPRESORA HP Envy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 35, 50000, ' Blanco ', '4325', 'HP', '2021-11-26 00:54:02', '2021-11-26 00:54:26', 9);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(88, 'IMPRESORA Canon Selphy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 10, 85000, '  Negro  ', '45219', 'Canon', '2021-11-26 01:05:39', '2021-11-26 01:06:41', 9);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(89, 'IMPRESORA HP OFFICEJET', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 20, 95500, ' Gris ', '443828', 'HP', '2021-11-26 01:23:11', '2021-11-26 01:24:27', 9);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(90, 'IMPRESORA HP SPROCET', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 100000, '  ', '3452', 'HP', '2021-11-26 01:29:43', '2021-11-26 01:30:02', 9);
INSERT INTO neotech.products
(id, name, description, discount, price, color, code, marca, createdAt, updatedAt, categoryId)
VALUES(91, 'IMPRESORA HP ENVY', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis? ', 25, 95000, '  Negro  ', '4562', 'HP', '2021-11-26 01:40:12', '2021-11-26 01:41:14', 9);



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

INSERT INTO neotech.productsimage
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
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(124, 'nuevos/1637873181227_img_.jpg', 56);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(125, 'nuevos/1637873181241_img_.jpg', 56);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(126, 'nuevos/1637873181255_img_.jpg', 56);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(127, 'nuevos/1637873181257_img_.jpg', 56);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(128, 'nuevos/1637874187661_img_.jpg', 57);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(129, 'nuevos/1637874187670_img_.jpg', 57);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(130, 'nuevos/1637874187674_img_.jpg', 57);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(131, 'nuevos/1637874187677_img_.png', 57);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(132, 'nuevos/1637874659458_img_.jpg', 58);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(133, 'nuevos/1637874659467_img_.jpg', 58);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(134, 'nuevos/1637874659484_img_.jpg', 58);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(135, 'nuevos/1637874659487_img_.jpg', 58);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(136, 'nuevos/1637876146140_img_.jpg', 59);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(137, 'nuevos/1637876146143_img_.jpg', 59);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(138, 'nuevos/1637876146146_img_.jpg', 59);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(139, 'nuevos/1637876146157_img_.jpg', 59);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(140, 'nuevos/1637876458409_img_.jpg', 60);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(141, 'nuevos/1637876458417_img_.jpg', 60);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(142, 'nuevos/1637876458421_img_.jpg', 60);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(143, 'nuevos/1637876458451_img_.jpg', 60);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(144, 'nuevos/1637876458459_img_.jpg', 60);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(145, 'nuevos/1637877045150_img_.jpg', 61);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(146, 'nuevos/1637877045153_img_.jpg', 61);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(147, 'nuevos/1637877045164_img_.jpg', 61);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(148, 'nuevos/1637877045175_img_.jpg', 61);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(149, 'nuevos/1637877770716_img_.jpg', 62);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(150, 'nuevos/1637877770718_img_.jpg', 62);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(151, 'nuevos/1637877770731_img_.jpg', 62);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(152, 'nuevos/1637877770734_img_.jpg', 62);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(153, 'nuevos/1637878687512_img_.jpg', 63);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(154, 'nuevos/1637878687520_img_.jpg', 63);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(155, 'nuevos/1637878687552_img_.jpg', 63);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(156, 'nuevos/1637878687606_img_.jpg', 63);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(157, 'nuevos/1637878905718_img_.jpg', 64);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(158, 'nuevos/1637878905720_img_.jpg', 64);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(159, 'nuevos/1637878905730_img_.jpg', 64);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(160, 'nuevos/1637878905798_img_.jpg', 64);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(161, 'nuevos/1637879770874_img_.jpg', 65);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(162, 'nuevos/1637879770879_img_.jpg', 65);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(163, 'nuevos/1637879770943_img_.jpg', 65);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(164, 'nuevos/1637879770964_img_.jpg', 65);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(165, 'nuevos/1637880306099_img_.jpg', 66);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(166, 'nuevos/1637880306105_img_.jpg', 66);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(167, 'nuevos/1637880306110_img_.jpg', 66);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(168, 'nuevos/1637880306121_img_.jpg', 66);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(169, 'nuevos/1637880594573_img_.jpg', 67);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(170, 'nuevos/1637880594577_img_.jpg', 67);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(171, 'nuevos/1637880594579_img_.jpg', 67);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(172, 'nuevos/1637880594582_img_.jpg', 67);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(173, 'nuevos/1637880910384_img_.png', 68);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(174, 'nuevos/1637880910476_img_.jpg', 68);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(175, 'nuevos/1637880910486_img_.png', 68);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(176, 'nuevos/1637880910508_img_.jpeg', 68);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(177, 'nuevos/1637881144778_img_.png', 69);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(178, 'nuevos/1637881144867_img_.jpg', 69);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(179, 'nuevos/1637881144870_img_.png', 69);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(180, 'nuevos/1637881144883_img_.jpeg', 69);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(181, 'nuevos/1637883653970_img_.png', 70);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(182, 'nuevos/1637883654072_img_.jpg', 70);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(183, 'nuevos/1637883654075_img_.jpg', 70);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(184, 'nuevos/1637883654086_img_.jpg', 70);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(185, 'nuevos/1637883998460_img_.jpg', 71);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(186, 'nuevos/1637883998460_img_.jpg', 71);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(187, 'nuevos/1637883998460_img_.jpg', 71);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(188, 'nuevos/1637883998460_img_.jpg', 71);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(189, 'nuevos/1637884257507_img_.jpg', 72);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(190, 'nuevos/1637884257512_img_.jpg', 72);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(191, 'nuevos/1637884257518_img_.jpg', 72);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(192, 'nuevos/1637884257520_img_.jpg', 72);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(193, 'nuevos/1637884257523_img_.jpeg', 72);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(194, 'nuevos/1637884790421_img_.jpg', 73);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(195, 'nuevos/1637884790421_img_.jpg', 73);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(196, 'nuevos/1637884790421_img_.jpg', 73);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(197, 'nuevos/1637884790421_img_.jpg', 73);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(198, 'nuevos/1637885437663_img_.jpg', 74);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(199, 'nuevos/1637885437666_img_.jpg', 74);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(200, 'nuevos/1637885437668_img_.jpg', 74);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(201, 'nuevos/1637885437671_img_.jpg', 74);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(202, 'nuevos/1637887504643_img_.jpg', 75);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(203, 'nuevos/1637887504670_img_.jpg', 75);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(204, 'nuevos/1637887504810_img_.jpg', 75);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(205, 'nuevos/1637887504818_img_.jpg', 75);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(206, 'nuevos/1637888465636_img_.jpg', 76);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(207, 'nuevos/1637888465636_img_.jpg', 76);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(208, 'nuevos/1637888465636_img_.jpg', 76);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(209, 'nuevos/1637888465636_img_.jpg', 76);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(210, 'nuevos/1637889661244_img_.jpg', 77);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(211, 'nuevos/1637889661244_img_.jpg', 77);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(212, 'nuevos/1637889661244_img_.jpg', 77);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(213, 'nuevos/1637889661244_img_.jpg', 77);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(214, 'nuevos/1637889568437_img_.jpg', 78);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(215, 'nuevos/1637889568437_img_.jpg', 78);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(216, 'nuevos/1637889568437_img_.jpg', 78);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(217, 'nuevos/1637889568437_img_.jpg', 78);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(218, 'nuevos/1637890366978_img_.jpg', 79);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(219, 'nuevos/1637890366978_img_.jpg', 79);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(220, 'nuevos/1637890366978_img_.jpg', 79);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(221, 'nuevos/1637890366978_img_.jpg', 79);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(222, 'nuevos/1637890796961_img_.jpg', 80);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(223, 'nuevos/1637890796961_img_.jpg', 80);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(224, 'nuevos/1637890796961_img_.jpg', 80);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(225, 'nuevos/1637890796961_img_.jpg', 80);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(226, 'nuevos/1637891425640_img_.jpg', 81);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(227, 'nuevos/1637891425640_img_.jpg', 81);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(228, 'nuevos/1637891425640_img_.jpg', 81);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(229, 'nuevos/1637891425640_img_.jpg', 81);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(230, 'nuevos/1637893062730_img_.jpg', 82);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(231, 'nuevos/1637893062730_img_.jpg', 82);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(232, 'nuevos/1637893062730_img_.jpg', 82);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(233, 'nuevos/1637893062730_img_.jpg', 82);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(234, 'nuevos/1637893431328_img_.jpg', 83);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(235, 'nuevos/1637893431333_img_.jpg', 83);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(236, 'nuevos/1637893431345_img_.jpg', 83);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(237, 'nuevos/1637893431478_img_.jpg', 83);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(238, 'nuevos/1637894421263_img_.jpg', 84);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(239, 'nuevos/1637894421263_img_.jpg', 84);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(240, 'nuevos/1637894421263_img_.jpg', 84);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(241, 'nuevos/1637894421263_img_.jpg', 84);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(242, 'nuevos/1637894837990_img_.jpg', 85);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(243, 'nuevos/1637894837990_img_.jpg', 85);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(244, 'nuevos/1637894837990_img_.jpg', 85);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(245, 'nuevos/1637894837990_img_.jpg', 85);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(246, 'nuevos/1637895217512_img_.jpg', 86);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(247, 'nuevos/1637895217512_img_.jpg', 86);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(248, 'nuevos/1637895217512_img_.jpg', 86);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(249, 'nuevos/1637895217512_img_.jpg', 86);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(250, 'nuevos/1637898865943_img_.jpg', 87);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(251, 'nuevos/1637898865943_img_.jpg', 87);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(252, 'nuevos/1637898865943_img_.jpg', 87);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(253, 'nuevos/1637898865943_img_.jpg', 87);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(254, 'nuevos/1637899600746_img_.jpg', 88);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(255, 'nuevos/1637899600746_img_.jpg', 88);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(256, 'nuevos/1637899600746_img_.jpg', 88);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(257, 'nuevos/1637899600746_img_.jpg', 88);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(258, 'nuevos/1637900667073_img_.jpg', 89);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(259, 'nuevos/1637900667073_img_.jpg', 89);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(260, 'nuevos/1637900667073_img_.jpg', 89);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(261, 'nuevos/1637900667073_img_.jpg', 89);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(262, 'nuevos/1637901002092_img_.jpg', 90);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(263, 'nuevos/1637901002092_img_.jpg', 90);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(264, 'nuevos/1637901002092_img_.jpg', 90);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(265, 'nuevos/1637901002092_img_.jpg', 90);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(266, 'nuevos/1637901674656_img_.jpg', 91);
INSERT INTO neotech.productsimage
(id, name, productId)
VALUES(267, 'nuevos/1637901674656_img_.jpg', 91);


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

-- neotech.cart definition


CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_FK` (`productId`),
  KEY `carts_FK_1` (`userId`),
  CONSTRAINT `carts_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `carts_FK_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4