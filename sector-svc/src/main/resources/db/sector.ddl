CREATE TABLE `sector` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sector_name` varchar(255) NOT NULL,
  `brief` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_ipo_detail` (`sector_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1