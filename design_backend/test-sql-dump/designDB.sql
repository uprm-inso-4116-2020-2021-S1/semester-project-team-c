-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: designDB
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attending_list`
--

DROP TABLE IF EXISTS `attending_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attending_list` (
  `attending_listid` int(11) NOT NULL,
  `tour_tid` int(11) NOT NULL,
  `user_uid` int(11) NOT NULL,
  PRIMARY KEY (`attending_listid`,`tour_tid`,`user_uid`),
  KEY `fk_attending_list_tour1_idx` (`tour_tid`),
  KEY `fk_attending_list_user1_idx` (`user_uid`),
  CONSTRAINT `fk_attending_list_tour1` FOREIGN KEY (`tour_tid`) REFERENCES `tour` (`tid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_attending_list_user1` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attending_list`
--

LOCK TABLES `attending_list` WRITE;
/*!40000 ALTER TABLE `attending_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `attending_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `coid` int(11) NOT NULL AUTO_INCREMENT,
  `companyname` varchar(45) DEFAULT NULL,
  `companyurl` varchar(45) DEFAULT NULL,
  `companycreatedAt` datetime DEFAULT current_timestamp(),
  `location_lid` int(11) NOT NULL,
  PRIMARY KEY (`coid`,`location_lid`),
  KEY `fk_company_location1_idx` (`location_lid`),
  CONSTRAINT `fk_company_location1` FOREIGN KEY (`location_lid`) REFERENCES `location` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (19,'ARfdsfds',' ','2020-11-22 05:03:03',22);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `user_uid` int(11) NOT NULL,
  PRIMARY KEY (`cid`,`user_uid`),
  KEY `fk_customer_user1_idx` (`user_uid`),
  CONSTRAINT `fk_customer_user1` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (4,'AR','AR',28);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(25) DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  `meetingPlace` varchar(45) DEFAULT NULL,
  `eventdate` datetime DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `eventcreatedAt` datetime DEFAULT current_timestamp(),
  `eventupdatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tour_tid` int(11) NOT NULL,
  `location_lid` int(11) NOT NULL,
  `location_city` varchar(100) NOT NULL,
  `event_archived` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`eid`,`tour_tid`,`location_lid`,`location_city`),
  KEY `fk_event_tour1_idx` (`tour_tid`),
  KEY `fk_event_location1_idx` (`location_lid`,`location_city`),
  CONSTRAINT `fk_event_location1` FOREIGN KEY (`location_lid`, `location_city`) REFERENCES `location` (`lid`, `city`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_event_tour1` FOREIGN KEY (`tour_tid`) REFERENCES `tour` (`tid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guide`
--

DROP TABLE IF EXISTS `guide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guide` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `youtube` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `user_uid` int(11) NOT NULL,
  `company_coid` int(11) NOT NULL,
  PRIMARY KEY (`gid`,`company_coid`,`user_uid`),
  KEY `guide_user_uid` (`user_uid`),
  KEY `guide_company_coid` (`company_coid`),
  CONSTRAINT `fk_guide_company1` FOREIGN KEY (`company_coid`) REFERENCES `company` (`coid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_guide_user` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guide`
--

LOCK TABLES `guide` WRITE;
/*!40000 ALTER TABLE `guide` DISABLE KEYS */;
INSERT INTO `guide` VALUES (10,'AR','AR','7875555555',' ',' ',' ',' ',' ',24,19);
/*!40000 ALTER TABLE `guide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `img_id` int(11) NOT NULL,
  `img_name` varchar(100) DEFAULT NULL,
  `user_uid` int(11) NOT NULL,
  PRIMARY KEY (`img_id`,`user_uid`),
  KEY `fk_images_user1_idx` (`user_uid`),
  CONSTRAINT `fk_images_user1` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `building` varchar(100) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `zipcode` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`lid`,`city`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (19,'AAD','ADAF','FSDDAS','00000'),(20,'AAD','ADAF','FSDDAS','00000'),(21,'AAD','ADAF','FSDDAS','00000'),(22,'AAD','ADAF','FSDDAS','00000');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `type_of_review` int(1) NOT NULL DEFAULT 0,
  `reviewcreatedAt` datetime DEFAULT current_timestamp(),
  `user_uid` int(11) NOT NULL,
  PRIMARY KEY (`rid`,`user_uid`),
  KEY `fk_review_user1_idx` (`user_uid`),
  CONSTRAINT `fk_review_user1` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_for_user`
--

DROP TABLE IF EXISTS `review_for_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_for_user` (
  `rfuid` int(11) NOT NULL AUTO_INCREMENT,
  `review_message` varchar(255) DEFAULT NULL,
  `stars` int(1) NOT NULL,
  `review_rid` int(11) NOT NULL,
  `reviewer_user_uid` int(11) NOT NULL,
  `reviewee_uid` int(11) NOT NULL,
  PRIMARY KEY (`rfuid`,`review_rid`,`reviewer_user_uid`,`reviewee_uid`),
  KEY `fk_user_review_review1_idx` (`review_rid`,`reviewer_user_uid`),
  CONSTRAINT `fk_user_review_review1` FOREIGN KEY (`review_rid`, `reviewer_user_uid`) REFERENCES `review` (`rid`, `user_uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_for_user`
--

LOCK TABLES `review_for_user` WRITE;
/*!40000 ALTER TABLE `review_for_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `review_for_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tour` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tour_name` varchar(255) NOT NULL,
  `guide_gid` int(11) NOT NULL,
  `guide_company_coid` int(11) NOT NULL,
  `guide_user_uid` int(11) NOT NULL,
  PRIMARY KEY (`tid`,`guide_gid`,`guide_company_coid`,`guide_user_uid`),
  KEY `fk_tour_guide1_idx` (`guide_gid`,`guide_company_coid`,`guide_user_uid`),
  CONSTRAINT `fk_tour_guide1` FOREIGN KEY (`guide_gid`, `guide_company_coid`, `guide_user_uid`) REFERENCES `guide` (`gid`, `company_coid`, `user_uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
/*!40000 ALTER TABLE `tour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tour_review`
--

DROP TABLE IF EXISTS `tour_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tour_review` (
  `trid` int(11) NOT NULL AUTO_INCREMENT,
  `review_message` varchar(255) DEFAULT NULL,
  `stars` int(11) NOT NULL,
  `tour_tid` int(11) NOT NULL,
  `review_rid` int(11) NOT NULL,
  `review_user_uid` int(11) NOT NULL,
  PRIMARY KEY (`trid`,`tour_tid`,`review_rid`,`review_user_uid`),
  KEY `fk_tour_review_tour1_idx` (`tour_tid`),
  KEY `fk_tour_review_review1_idx` (`review_rid`,`review_user_uid`),
  CONSTRAINT `fk_tour_review_review1` FOREIGN KEY (`review_rid`, `review_user_uid`) REFERENCES `review` (`rid`, `user_uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tour_review_tour1` FOREIGN KEY (`tour_tid`) REFERENCES `tour` (`tid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour_review`
--

LOCK TABLES `tour_review` WRITE;
/*!40000 ALTER TABLE `tour_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `tour_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `uid_UNIQUE` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (24,'ExplotoComo@siquitraque.com','A1a1',1,'2020-11-22 05:03:03'),(28,'r@gmol.com','A1a1',0,'2020-11-22 21:49:41');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-25  2:48:17
