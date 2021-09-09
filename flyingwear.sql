-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 06, 2021 at 09:32 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flyingwear`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_products`
--

CREATE TABLE `all_products` (
  `pid` bigint(20) UNSIGNED NOT NULL,
  `pname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `t_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `all_products`
--

INSERT INTO `all_products` (`pid`, `pname`, `pstock`, `t_name`) VALUES
(5, 'zara black shirt', 40, 'shirts'),
(6, 'Superdry Grey Shirt', 50, 'shirts'),
(7, 'Superdry Black Shirt', 50, 'shirts'),
(8, 'Superdry Green Shirt', 50, 'shirts'),
(9, 'Superdry Blue Shirt', 50, 'shirts'),
(10, 'Muftti Blue Denim Shirt', 50, 'shirts'),
(11, 'USPA Yellow', 50, 'round_necks'),
(12, 'Chase Zoon', 40, 'round_necks'),
(13, 'Addidas', 100, 'round_necks'),
(14, 'K & K Superman', 100, 'round_necks');

-- --------------------------------------------------------

--
-- Table structure for table `caperies`
--

CREATE TABLE `caperies` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jeans`
--

CREATE TABLE `jeans` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `joggers`
--

CREATE TABLE `joggers` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kurtas`
--

CREATE TABLE `kurtas` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_08_21_093358_create_all_products_table', 2),
(5, '2021_08_28_085307_create_shirts_table', 3),
(6, '2021_09_01_125330_create_round_necks_table', 4),
(7, '2021_09_01_165417_create_polos_table', 5),
(8, '2021_09_01_165553_create_sweat_shirts_table', 5),
(9, '2021_09_01_165620_create_kurtas_table', 5),
(10, '2021_09_01_165658_create_jeans_table', 5),
(11, '2021_09_01_165719_create_joggers_table', 5),
(12, '2021_09_01_165751_create_caperies_table', 5),
(13, '2021_09_01_165809_create_shorts_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `polos`
--

CREATE TABLE `polos` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `round_necks`
--

CREATE TABLE `round_necks` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `round_necks`
--

INSERT INTO `round_necks` (`pid`, `pname`, `pimg`, `psizes`, `pprice`, `pstock`, `colors`, `fabric`, `images`, `bid`, `sizes`, `stock_s`, `stock_m`, `stock_l`, `stock_xl`, `stock_2xl`, `stock_3xl`, `stock_4xl`, `stock_5xl`, `description`, `modal_id`, `label_id`, `control`, `control_link`) VALUES
(11, 'USPA Yellow', 'storage/product_images/img_1_11.jpg', 'L | XL', 450.00, 50, '[\"Yellow\"]', 'cotton', '[]', 'Resell_mall_D9146', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 0, 25, 25, 0, 0, 0, 0, '** Cool casual round neck t-shirt.\n** Made for day to day job.\n#USPA #INDIAN_BRAND\n#CASUAL #FASHION', '#11', 'exampleModalLabel11', 'carouselExampleControls11', '#carouselExampleControls11'),
(12, 'Chase Zoon', 'storage/product_images/img_1_12.jpg', 'M | L | XL', 450.00, 40, '[\"light-blue\"]', 'Cotton', '[]', '18485358', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 10, 15, 15, 0, 0, 0, 0, '**M--(38)inches\n    L--(40)inches\n   XL--(42)inches\n#Chase #Indian \n#Fashion #Casual', '#12', 'exampleModalLabel12', 'carouselExampleControls12', '#carouselExampleControls12'),
(13, 'Addidas', 'storage/product_images/img_1_13.jpg', 'M | L | XL | 2XL', 470.00, 100, '[\"Pink-Black\"]', 'Cotton', '[]', NULL, '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 25, 25, 25, 25, 0, 0, 0, '**M--(38)inches\n  L--(40)inches\n  XL--(42)inches\n  2Xl--(44)inches\n#Addidas #indian\n#casual #Fashion', '#13', 'exampleModalLabel13', 'carouselExampleControls13', '#carouselExampleControls13'),
(14, 'K & K Superman', 'storage/product_images/img_1_14.jpg', 'M | L | XL | 2XL', 450.00, 100, '[\"White&Black\"]', 'Cotton', '[]', NULL, '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 25, 25, 25, 25, 0, 0, 0, '**M--(38)inches\n  L--(40)inches\n  XL--(42)inches\n  2XL--(44)inches\n#K&K #Superman\n#Casual #Fasion', '#14', 'exampleModalLabel14', 'carouselExampleControls14', '#carouselExampleControls14');

-- --------------------------------------------------------

--
-- Table structure for table `shirts`
--

CREATE TABLE `shirts` (
  `pid` bigint(20) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shirts`
--

INSERT INTO `shirts` (`pid`, `pname`, `pimg`, `psizes`, `pprice`, `pstock`, `colors`, `fabric`, `images`, `bid`, `sizes`, `stock_s`, `stock_m`, `stock_l`, `stock_xl`, `stock_2xl`, `stock_3xl`, `stock_4xl`, `stock_5xl`, `description`, `modal_id`, `label_id`, `control`, `control_link`) VALUES
(5, 'zara black shirt', 'storage/product_images/img_1_5.png', 'M | L', 340.99, 40, '[\"black\"]', 'cotton', '[\"storage/product_images/img_2_5.png\"]', NULL, '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 20, 20, 0, 0, 0, 0, 0, '*this is a very good quality shirt\n*it\'s hand made\n#made_in_india\n#party_wear', '#5', 'exampleModalLabel5', 'carouselExampleControls5', '#carouselExampleControls5'),
(6, 'Superdry Grey Shirt', 'storage/product_images/img_1_6.jpg', 'M | L | XL | 2XL', 472.00, 50, '[\"grey\"]', 'cotton', '[]', 'Resell_mall_BM31548', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 10, 15, 15, 10, 0, 0, 0, '**This is a primium quality shirt.\n**It\'s hand stiched and sponsered by an indian brand\n#PartyWear #MadeInIndia\n#Classy #Superdry', '#6', 'exampleModalLabel6', 'carouselExampleControls6', '#carouselExampleControls6'),
(7, 'Superdry Black Shirt', 'storage/product_images/img_1_7.jpg', 'M | L | XL | 2XL', 472.00, 50, '[\"black\"]', 'cotton', '[]', 'Resell_mall_BM31547', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 10, 15, 15, 10, 0, 0, 0, '**This is a very good quality shirt.\n**It\'s also hand made.\n#PartyWear #MadeInIndia\n#Classy #Superdry', '#7', 'exampleModalLabel7', 'carouselExampleControls7', '#carouselExampleControls7'),
(8, 'Superdry Green Shirt', 'storage/product_images/img_1_8.jpg', 'M | L | XL | 2XL', 472.00, 50, '[\"green\"]', 'cotton', '[]', 'Resell_mall_BM31546', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 10, 15, 15, 10, 0, 0, 0, '**This is a very good quality shirt.\n**It\'s also hand made.\n#PartyWear #MadeInIndia\n#Classy #Superdry', '#8', 'exampleModalLabel8', 'carouselExampleControls8', '#carouselExampleControls8'),
(9, 'Superdry Blue Shirt', 'storage/product_images/img_1_9.jpg', 'M | L | XL | 2XL', 472.00, 50, '[\"blue\"]', 'cotton', '[]', 'Resell_mall_BM31545', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 10, 15, 15, 10, 0, 0, 0, '**This is a very good quality shirt.\n**It\'s also hand made.\n#PartyWear #MadeInIndia\n#Classy #Superdry', '#9', 'exampleModalLabel9', 'carouselExampleControls9', '#carouselExampleControls9'),
(10, 'Muftti Blue Denim Shirt', 'storage/product_images/img_1_10.jpg', 'M | L | XL', 570.00, 50, '[\"Denim-blue\"]', 'Denim', '[]', 'Resell_mall_D17916', '[\"S\", \"M\", \"L\", \"XL\", \"2XL\", \"3XL\", \"4XL\", \"5XL\"]', 0, 15, 15, 20, 0, 0, 0, 0, '**this is pure denim stuff.\n**you will feel the vibe after wearing it.\n#Muffti #Denim\n#Fashion', '#10', 'exampleModalLabel10', 'carouselExampleControls10', '#carouselExampleControls10');

-- --------------------------------------------------------

--
-- Table structure for table `shorts`
--

CREATE TABLE `shorts` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sweat_shirts`
--

CREATE TABLE `sweat_shirts` (
  `pid` int(10) UNSIGNED NOT NULL,
  `pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psizes` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pprice` double(8,2) NOT NULL,
  `pstock` int(10) UNSIGNED NOT NULL,
  `colors` json NOT NULL,
  `fabric` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `bid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sizes` json NOT NULL,
  `stock_s` smallint(5) UNSIGNED NOT NULL,
  `stock_m` smallint(5) UNSIGNED NOT NULL,
  `stock_l` smallint(5) UNSIGNED NOT NULL,
  `stock_xl` smallint(5) UNSIGNED NOT NULL,
  `stock_2xl` smallint(5) UNSIGNED NOT NULL,
  `stock_3xl` smallint(5) UNSIGNED NOT NULL,
  `stock_4xl` smallint(5) UNSIGNED NOT NULL,
  `stock_5xl` smallint(5) UNSIGNED NOT NULL,
  `description` varchar(7000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `modal_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label_id` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `control_link` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_number` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cart` json DEFAULT NULL,
  `orders` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `number`, `w_number`, `password`, `cart`, `orders`, `created_at`, `updated_at`) VALUES
(1, 'milandeep singh bhalla', 'milansinghdav@gmail.com', '+916284179694', '+916284179694', '$2y$10$nbHXMJHp6GJIt5Wz9fDisem.iu4UlCsWmYJqyIcvbUaFoUhSWl71u', '[{\"pid\": \"5\", \"size\": \"L\", \"color\": \"black\", \"cart_id\": \"5_L_black\"}, {\"pid\": \"5\", \"size\": \"L\", \"color\": \"black\", \"cart_id\": \"5_L_black\"}, {\"pid\": \"5\", \"size\": \"L\", \"color\": \"black\", \"cart_id\": \"5_L_black\"}]', NULL, '2021-08-20 05:35:09', '2021-08-20 05:35:09'),
(2, 'milan', 'milansingh7696@gmail.com', '+91999', '+99999', '$2y$10$L1zleJyRuSeIeLUgstqwT.QsHweuKVHQwvpy6/WM3AHL2AB8sqd7.', NULL, NULL, NULL, NULL),
(3, 'millu', 'millu@gmail.com', '+99999', '+9999', '$2y$10$Nzj32WhNxnSkI7lKdqRI..gfjlYtQMpo9omZCCOPuOsFgqmpgQsye', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_products`
--
ALTER TABLE `all_products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `caperies`
--
ALTER TABLE `caperies`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jeans`
--
ALTER TABLE `jeans`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `joggers`
--
ALTER TABLE `joggers`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `kurtas`
--
ALTER TABLE `kurtas`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `polos`
--
ALTER TABLE `polos`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `round_necks`
--
ALTER TABLE `round_necks`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `shirts`
--
ALTER TABLE `shirts`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `shorts`
--
ALTER TABLE `shorts`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `sweat_shirts`
--
ALTER TABLE `sweat_shirts`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_products`
--
ALTER TABLE `all_products`
  MODIFY `pid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
