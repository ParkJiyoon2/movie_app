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
-- Table structure for table `ticker_info`
--

DROP TABLE IF EXISTS `ticker_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticker_info` (
  `symbol` varchar(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`symbol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticker_info`
--

LOCK TABLES `ticker_info` WRITE;
/*!40000 ALTER TABLE `ticker_info` DISABLE KEYS */;
INSERT INTO `ticker_info` VALUES ('AAPL','APPLE','https://blog.kakaocdn.net/dn/uqJpZ/btqyenBIIXx/mh1Cc5F023UGpfQTFBdqV0/img.jpg'),('AMZN','Amazon','https://blog.kakaocdn.net/dn/K1OeT/btqRoRMurfl/79ADEIWpDYCsIdq7YGB82k/img.png'),('BABA','Alibaba','https://blog.kakaocdn.net/dn/ZKcCY/btqzas9C6Qf/UclOb6NbVsKSiXd18uG301/img.jpg'),('FB','Facebook','https://t1.daumcdn.net/cfile/tistory/994EAB4F5D2565432F'),('GOOG','Google','https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/aFrEyVpANu07FvoBZQbIB4aF_uc'),('MS','Micro Soft','https://image.rocketpunch.com/company/10839/microsoft_logo.png?s=400x400&t=inside'),('WMT','Walmart Inc','https://lh3.googleusercontent.com/proxy/KibFyhr7E5AfgTYjQK_D5QuSC2jVM6iseshWuPCy25FQHirP_-k8Ooy54uENQfy6iNg6yZnYlRDntfyGQ4F55LL_Hq0DAjDLQ8D5Z2s21lsoryFqZwcNFyuIrnr9y76eYDBFgKyHzb5V_1zvkBQZ41GTZgVrri55lkJmPkex_61AnJZnJxm7tfFpcHRhV6NzpUhTOT2jmhjaYjCODGR6H0FjqHZ1b_ROGbvYA0nkfiZpynQ25KCCVw');
/*!40000 ALTER TABLE `ticker_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-08  6:09:48
