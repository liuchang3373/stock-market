CREATE TABLE `user_account` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `phone_number` varchar(255) NOT NULL,
  `confirmed_and_active` BOOLEAN NOT NULL DEFAULT false,
  `password_hash` varchar(100) DEFAULT '',
  `access_level` smallint(1) DEFAULT NULL,
  `photo_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_user_account_email` (`email`),
  KEY `ix_user_account_phone_number` (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1