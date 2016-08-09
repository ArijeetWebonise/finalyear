-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 05, 2016 at 06:22 PM
-- Server version: 5.7.12-0ubuntu1.1
-- PHP Version: 5.6.23-2+deb.sury.org~xenial+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wordpress3`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatdata`
--

CREATE TABLE `chatdata` (
  `ID` int(11) NOT NULL,
  `question` text NOT NULL,
  `reply` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chatdata`
--

INSERT INTO `chatdata` (`ID`, `question`, `reply`) VALUES
(1, 'Hi,Hey,Hello,Hola,Yo', 'Hi,Hey,Hello,Hola,Yo'),
(2, 'How are You, How r u, How are u, How r you, Hru', 'Fine! n u, Thank! I\'m Good'),
(3, 'Name,name,nam,Nam,Who are You,Who r You,Who r u,who r u,Who r u,Who R U', 'Anchit'),
(4, 'Who is Ben,who is Ben,Who is ben,who is ben', 'The Boy who died'),
(5, 'how ben died,How ben died,how Ben died,how ben Died,How Ben Died,How Ben died', 'His Father drowned him in the tab'),
(6, 'Who kill Ben,Who kill ben,who kill Ben,Who kill Ben', 'His Father'),
(7, 'Why Ben Father kill him,Why Ben Father Kill him,Why Ben father kill him,Why ben father kill him,why ben father kill him', 'U tell me');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatdata`
--
ALTER TABLE `chatdata`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatdata`
--
ALTER TABLE `chatdata`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
