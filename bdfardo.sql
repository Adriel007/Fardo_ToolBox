-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06-Nov-2022 às 21:48
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdfardo`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `configs`
--

CREATE TABLE `configs` (
  `volume` float NOT NULL,
  `nome` varchar(50) NOT NULL,
  `voz` int(10) DEFAULT NULL,
  `cor` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `configs`
--

INSERT INTO `configs` (`volume`, `nome`, `voz`, `cor`) VALUES
(1, ' fardo ', 1, 'lime');

-- --------------------------------------------------------

--
-- Estrutura da tabela `fardosconnection`
--

CREATE TABLE `fardosconnection` (
  `id` int(11) NOT NULL,
  `de` varchar(30) NOT NULL,
  `para` varchar(30) NOT NULL,
  `json` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `lembretes`
--

CREATE TABLE `lembretes` (
  `valor` varchar(255) CHARACTER SET utf8 NOT NULL,
  `data` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `lembretes`
--

INSERT INTO `lembretes` (`valor`, `data`) VALUES
(' dermatologista ', ' 29 de novembro ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rotinas`
--

CREATE TABLE `rotinas` (
  `descricao` varchar(100) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `dia_ou_semana` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `rotinas`
--

INSERT INTO `rotinas` (`descricao`, `hora`, `dia_ou_semana`) VALUES
(' jiu-jitsu ', ' 5:30 ', ' segunda-feira '),
(' jiu-jitsu ', ' 5:30 ', ' quarta-feira '),
(' jiu-jitsu ', ' 5:30 ', ' sexta-feira '),
(' casa da mãe ', ' 9 horas ', ' sábado ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fardosconnection`
--
ALTER TABLE `fardosconnection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lembretes`
--
ALTER TABLE `lembretes`
  ADD PRIMARY KEY (`valor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fardosconnection`
--
ALTER TABLE `fardosconnection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
