CREATE TABLE `stock_price` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `company_code` varchar(10) NOT NULL,
  `stock_exchange` varchar(5) NOT NULL,
  `current_price` float(7,3) DEFAULT NULL,
  `open_price` float(7,3) DEFAULT NULL,
  `close_price` float(7,3) DEFAULT NULL,
  `high_price` float(7,3) DEFAULT NULL,
  `low_price` float(7,3) DEFAULT NULL,
  `volume` float(7,3) DEFAULT NULL,
  `price_date` date NOT NULL DEFAULT '0001-01-01',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1