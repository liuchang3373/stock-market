CREATE TABLE `exchange` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `brief` varchar(255) DEFAULT NULL,
  `contact_address` varchar(255) DEFAULT NULL,
  `remarks` varchar(1000) DEFAULT NULL,
  `exchange_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1