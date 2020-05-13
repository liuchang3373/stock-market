CREATE TABLE `company` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `company_code` varchar(10) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `turnover` float(7,3) DEFAULT NULL,
  `ceo_name` varchar(50) DEFAULT NULL,
  `board_director` varchar(500) DEFAULT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `sector_id` int(11) DEFAULT NULL,
  `exchange_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_company_code` (`company_code`),
  KEY `ix_ipo_detail` (`company_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

