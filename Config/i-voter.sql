-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2019 at 11:22 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `i-voter`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adm_id` int(9) NOT NULL,
  `adm_name` varchar(255) NOT NULL,
  `cell_number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `csrc`
--

CREATE TABLE `csrc` (
  `csrc_id` int(15) NOT NULL,
  `csrc_name` varchar(120) NOT NULL,
  `csrc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `csrc`
--

INSERT INTO `csrc` (`csrc_id`, `csrc_name`, `csrc_img`) VALUES
(410, 'ANC', 'assets/logo/ptylg9.jpg'),
(420, 'EFF', 'assets/logo/ptylg1.jpg'),
(430, 'DA', 'assets/logo/ptylg8.jpg'),
(440, 'VF', 'assets/logo/ptylg12.png'),
(450, 'COPE', 'assets/logo/ptylg6.png'),
(470, 'PASMA', 'assets/logo/ptylg10.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `fac_id` int(2) NOT NULL,
  `fac_name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`fac_id`, `fac_name`) VALUES
(1, 'Humanities\r\n'),
(2, 'Information and Communication Technology'),
(3, 'Economic And Finance'),
(4, 'Management Sciences'),
(5, 'Engineering and Built Environment'),
(6, 'Science'),
(7, 'The Arts');

-- --------------------------------------------------------

--
-- Table structure for table `iscrc`
--

CREATE TABLE `iscrc` (
  `isrc_id` int(15) NOT NULL,
  `isrc_name` varchar(100) NOT NULL,
  `isrc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `iscrc`
--

INSERT INTO `iscrc` (`isrc_id`, `isrc_name`, `isrc_img`) VALUES
(210, 'ANC', 'assets/logo/ptylg9.jpg'),
(220, 'EEF', 'assets/logo/ptylg1.jpg'),
(230, 'DA', 'assets/logo/ptylg8.jpg'),
(240, 'VF', 'assets/logo/ptylg12.png');

-- --------------------------------------------------------

--
-- Table structure for table `sfc`
--

CREATE TABLE `sfc` (
  `sfc_id` int(15) NOT NULL,
  `fac_id` int(2) NOT NULL,
  `sfc_name` varchar(225) NOT NULL,
  `sfc_position` varchar(50) NOT NULL,
  `sfc_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sfc`
--

INSERT INTO `sfc` (`sfc_id`, `fac_id`, `sfc_name`, `sfc_position`, `sfc_img`) VALUES
(310, 1, 'MADONSELA NJABULO', 'CHAIRPERSON', 'assets/avater/6eba6407-5a59-47ff-a60f-a0a5fea99ef1.jpg'),
(311, 2, 'NGWENYA NOZIPHO', 'CHAIRPERSON', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(312, 1, 'PHATEDI SECHABA', 'DEPUTY SECRETARY', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(313, 2, 'MOKOENA WANDILE', 'DEPUTY SECRETARY', 'assets/avater/de1e05a1-55e1-4bfb-bb0c-c4500115b5a9.jpg'),
(314, 2, 'SINXADI TEBOGO', 'CHAIRPERSON', 'assets/avater/e3775e3e-8e5b-4272-8572-6e7ba450836f.jpg'),
(315, 2, 'MOLOTO LEGACY', 'SECRETARY', 'assets/avater/3bcb3d67-66be-4cd9-add8-ddd109e10a2f.jpg'),
(320, 1, 'MKHARI SIYABULA', 'CHAIRPERSON', 'assets/avater/6eba6407-5a59-47ff-a60f-a0a5fea99ef1.jpg'),
(330, 1, 'CQONTHSI THOBANI', 'DEPUTY SECRETARY', 'assets/avater/06f669e6-d66c-442f-a8de-d2c5bc595775.jpg'),
(340, 1, 'MAGOMANI CODENSA', 'DEPUTY SECRETARY', 'assets/avater/7c2900d7-f9a0-413f-94d1-e4febcb74d1e.jpg'),
(350, 1, 'MABASO NOLUTHANDO', 'SECRETARY', 'assets/avater/8c7fe769-c6d4-4398-abef-8286db1ae1fa.jpg'),
(360, 1, 'KHUMALO SANDILE', 'SECRETARY', 'assets/avater/54b0f03f-7bbe-4ecf-a154-51ec5d0d825a.jpg'),
(370, 2, 'KEKANA THOROSO', 'CHAIRPERSON', 'assets/avater/e56cb4a7-1e9f-4412-93bb-b761c4d7288a.jpg'),
(380, 2, 'MDLULI FEZILE', 'SECRETARY', 'assets/avater/fa7d460a-26c8-44ea-8cdd-33d88451bf9b.jpg'),
(390, 1, 'MUTARINI MICHEAL', 'SECRETARY', 'assets/avater/e3775e3e-8e5b-4272-8572-6e7ba450836f.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_fname` varchar(225) NOT NULL,
  `student_lname` varchar(225) NOT NULL,
  `student_id` int(9) NOT NULL,
  `student_password` varchar(30) NOT NULL,
  `fac_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Storing students details';

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_fname`, `student_lname`, `student_id`, `student_password`, `fac_id`) VALUES
('Kgaugelo', 'Moloto', 212486854, '12345678', 1),
('Kgaugelo', 'Moloto', 212486884, '12345678', 1),
('Kgaogelo', 'Maunatlala', 215123456, '12345678', 1),
('Kgaugelo', 'tut', 215611311, '12345678', 3),
('Kgaugelo', 'Moloto', 215611343, '12345678', 2),
('Kgaugelo', 'Moloto', 215611344, '12345678', 2),
('Kgaugelo', 'Moloto', 215611345, '12345678', 6),
('Kgaugelo', 'Moloto', 215611379, '12345678', 2),
('Kgaugelo', 'tut', 215611385, '12345678', 2),
('Kabelo', 'Malatji', 215611388, '12345678', 2),
('Kgaugelo', 'tut', 215611685, '12345678', 2),
('Dineo', 'Matlala', 217123456, '12345678', 2);

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `student_id` int(9) NOT NULL,
  `v_id` int(11) NOT NULL,
  `csrc_id` int(15) NOT NULL,
  `sfc_id` int(11) NOT NULL,
  `isrc_id` int(11) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`student_id`, `v_id`, `csrc_id`, `sfc_id`, `isrc_id`, `year`) VALUES
(215611388, 1, 420, 310, 220, 2019),
(215611388, 2, 450, 310, 230, 2019),
(215611311, 3, 340, 311, 240, 2019),
(217123456, 4, 420, 310, 220, 2019),
(215611343, 5, 420, 310, 220, 2019);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `csrc`
--
ALTER TABLE `csrc`
  ADD PRIMARY KEY (`csrc_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`fac_id`);

--
-- Indexes for table `iscrc`
--
ALTER TABLE `iscrc`
  ADD PRIMARY KEY (`isrc_id`),
  ADD KEY `isrc_id` (`isrc_id`);

--
-- Indexes for table `sfc`
--
ALTER TABLE `sfc`
  ADD PRIMARY KEY (`sfc_id`),
  ADD KEY `fac_id` (`fac_id`),
  ADD KEY `sfc_id` (`sfc_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `fac_id` (`fac_id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`v_id`),
  ADD KEY `candidate_id` (`csrc_id`),
  ADD KEY `user_id` (`student_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sfc`
--
ALTER TABLE `sfc`
  ADD CONSTRAINT `sfc_ibfk_1` FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`fac_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`fac_id`);

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
