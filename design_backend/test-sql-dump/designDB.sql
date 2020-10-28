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
-- Table structure for table `company`
--
CREATE DATABASE IF NOT EXISTS `designDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `designDB`; 


DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `coid` int(11) NOT NULL AUTO_INCREMENT,
  `companyname` varchar(45) DEFAULT NULL,
  `companyurl` varchar(45) DEFAULT NULL,
  `location_lid` int(11) NOT NULL,
  PRIMARY KEY (`coid`,`location_lid`),
  KEY `fk_company_location1_idx` (`location_lid`),
  CONSTRAINT `fk_company_location1` FOREIGN KEY (`location_lid`) REFERENCES `location` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
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
  PRIMARY KEY (`cid`),
  KEY `fk_customer_user1_idx` (`user_uid`),
  CONSTRAINT `fk_customer_user1` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
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
  PRIMARY KEY (`eid`)
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
-- Table structure for table `event_has_location`
--

DROP TABLE IF EXISTS `event_has_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_has_location` (
  `event_eventid` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`event_eventid`,`location_id`),
  KEY `fk_event_has_location_location1_idx` (`location_id`),
  KEY `fk_event_has_location_event1_idx` (`event_eventid`),
  CONSTRAINT `fk_event_has_location_event1` FOREIGN KEY (`event_eventid`) REFERENCES `event` (`eid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_event_has_location_location1` FOREIGN KEY (`location_id`) REFERENCES `location` (`lid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_has_location`
--

LOCK TABLES `event_has_location` WRITE;
/*!40000 ALTER TABLE `event_has_location` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_has_location` ENABLE KEYS */;
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
  `company_location_lid` int(11) NOT NULL,
  PRIMARY KEY (`gid`,`company_coid`,`company_location_lid`),
  KEY `fk_guide_user_idx` (`user_uid`),
  KEY `fk_guide_company1_idx` (`company_coid`,`company_location_lid`),
  CONSTRAINT `fk_guide_company1` FOREIGN KEY (`company_coid`, `company_location_lid`) REFERENCES `company` (`coid`, `location_lid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_guide_user` FOREIGN KEY (`user_uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guide`
--

LOCK TABLES `guide` WRITE;
/*!40000 ALTER TABLE `guide` DISABLE KEYS */;
/*!40000 ALTER TABLE `guide` ENABLE KEYS */;
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
  `city` varchar(100) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
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
  `reviewmessage` varchar(255) DEFAULT NULL,
  `stars` int(1) NOT NULL,
  `reviewcreatedAt` varchar(45) DEFAULT NULL,
  `customer_cid` int(11) NOT NULL,
  `event_eid` int(11) NOT NULL,
  PRIMARY KEY (`rid`,`event_eid`),
  KEY `fk_review_customer1_idx` (`customer_cid`),
  KEY `fk_review_event1_idx` (`event_eid`),
  CONSTRAINT `fk_review_customer1` FOREIGN KEY (`customer_cid`) REFERENCES `customer` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_review_event1` FOREIGN KEY (`event_eid`) REFERENCES `event` (`eid`) ON DELETE CASCADE ON UPDATE CASCADE
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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
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

-- Dump completed on 2020-10-28 18:13:53
