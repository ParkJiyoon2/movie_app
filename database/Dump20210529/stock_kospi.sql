-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: stock
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kospi`
--

DROP TABLE IF EXISTS `kospi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kospi` (
  `close` double DEFAULT NULL,
  `open` double DEFAULT NULL,
  `high` double DEFAULT NULL,
  `low` double DEFAULT NULL,
  `volume` double DEFAULT NULL,
  `change` double DEFAULT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kospi`
--

LOCK TABLES `kospi` WRITE;
/*!40000 ALTER TABLE `kospi` DISABLE KEYS */;
INSERT INTO `kospi` VALUES (3153.32,3131.35,3162.31,3131.35,836400000,0.01,'2021-05-14'),(3134.52,3163.21,3173.01,3121.32,771310000,-0.006,'2021-05-17'),(3173.05,3135.38,3176.4,3135.38,786140000,0.0123,'2021-05-18'),(3162.28,3174.53,3174.53,3140.48,774250000,-0.0034000000000000002,'2021-05-20'),(3156.42,3171.91,3198.01,3149.46,797260000,-0.0019,'2021-05-21'),(3144.3,3155.91,3163.27,3137.81,587970000,-0.0038,'2021-05-24'),(3171.32,3152.93,3173.1,3148.3,612980000,0.0086,'2021-05-25'),(3168.43,3171.91,3183.97,3160.3,1270000000,-0.0009,'2021-05-26'),(3165.51,3170.84,3173.86,3142.37,1080000000,-0.0009,'2021-05-27'),(3188.73,3172.09,3198.66,3171.85,966370000,0.0073,'2021-05-28');
/*!40000 ALTER TABLE `kospi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-29 21:20:42
