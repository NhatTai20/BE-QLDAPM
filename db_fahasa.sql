-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_fahasa
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `IDBooks` int NOT NULL AUTO_INCREMENT,
  `IDProduct` varchar(100) DEFAULT NULL,
  `Author` varchar(200) DEFAULT NULL,
  `Supplier` varchar(500) DEFAULT NULL,
  `PublishingCompany` varchar(500) DEFAULT NULL,
  `CoverForm` varchar(100) DEFAULT NULL,
  `Translator` varchar(100) DEFAULT NULL,
  `PublishingYear` int DEFAULT NULL,
  `NumberOfPage` int DEFAULT NULL,
  PRIMARY KEY (`IDBooks`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'	3300000002736','Bộ Giáo Dục Và Đào Tạo','	Nhà xuất bản Giáo Dục','	NXB Đại Học Sư Phạm Tp.HCM','Bìa Mềm',NULL,2000,600),(2,'	8934974174530','Hitoshi Iwaaki','NXB Trẻ','NXB Trẻ','Bìa Mềm',NULL,2021,60),(3,'	8935230000594','Nhiều Tác Giả','Cty Văn Hóa & Truyền Thông Trí Việt.','NXB Hồng Đức','Bìa Mềm',NULL,2021,350),(4,'	8935244859829','Masashi Kishimoto','Nhà Xuất Bản Kim Đồng','	Nhà Xuất Bản Kim Đồng','Bìa Mềm','Vương Bảo Long',2021,200),(5,'	8935278602286','Philippa Gregory','Saigon Books','NXB Văn hóa - Văn nghệ','Bìa Mềm','	Hitokiri',2021,620),(6,'	8935278603191','Don M Green','Saigon Books','NXB Thế Giới','Bìa Mềm',NULL,2021,300),(7,'	9786049609688','Nancy Cato','Cty Văn Hóa & Truyền Thông Trí Việt.','NXB Hội Nhà Văn','Bìa Mềm',NULL,2018,600),(8,'3300000001746','Nhiều Tác Giả','	Công ty Cổ Phần Đầu Tư Xuât Bản - Thiết Bị Giáo Dục Việt Nam','NXB Đại Học Sư Phạm TPHCM','Bìa Mềm','Trương Võ Anh Giang, Anh Trần',2018,1978),(9,'3300000004099','Nhiều Tác Giả','	Nhà xuất bản Giáo Dục','NXB Đại Học Sư Phạm TPHCM','Bìa Mềm',NULL,2021,1000),(10,'3300000004150','Nhiều Tác Giả','	Nhà xuất bản Giáo Dục','	NXB Giáo Dục Việt Nam','Bìa Mềm',NULL,2021,2000),(11,'3300000006079','Hikaru Nakamura','Nhà Xuất Bản Kim Đồng','	NXB Kim Đồng','Bìa Mềm','	Liên Vũ',2021,200),(12,'8935244859768','	Takaya Kagami, Yamato Yamamoto, Daisuke Furuya','Nhà Xuất Bản Kim Đồng','	NXB Kim Đồng','Bìa Mềm','	Ukatomai',2021,200),(13,'8935278602606','	Stu Heinecke','Saigon Books','NXB Thế Giới','Bìa Mềm','',2021,400),(14,'	9786045469705','Lưu Thị Kim Nhung','	CÔNG TY TNHH ĐẦU TƯ VÀ PHÁT TRIỂN GIÁO DỤC CÁNH BUỒM','NXB Đại Học Sư Phạm','Bìa Mềm',NULL,2020,68),(15,'	8935235226272','	Paulo Coelho','	Nhã Nam','	NXB Hội Nhà Văn','Bìa Mềm','	Lê Chu Cầu',2020,227),(16,'8935235228351','	José Mauro de Vasconcelos','	Nhã Nam','	NXB Hội Nhà Văn','Bìa Mềm','Nguyễn Bích Lan, Tô Yến Ly',2020,244),(17,'8935325000980','	Khotudien','	Skybooks','NXB Phụ Nữ Việt Nam','Bìa Mềm',NULL,2021,280),(18,'8935244848335','Tô Hoài','Nhà Xuất Bản Kim Đồng','NXB Kim Đồng','Bìa Cứng',NULL,2020,136),(19,'	8936072917248','	Thùy Dương, Như Quỳnh','Crabit Kidbooks','	NXB Hà Nội','Bìa Mềm',NULL,2020,152),(20,'8935244858433','	Takaya Kagami, Yamato Yamamoto, Daisuke Furuya','	Nhà Xuất Bản Kim Đồng','	NXB Kim Đồng','Bìa Mềm','	Ukatomai',2021,192);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `IDItems` int NOT NULL AUTO_INCREMENT,
  `IDProducts` varchar(100) NOT NULL,
  `Origin` varchar(100) DEFAULT NULL,
  `Trademark` varchar(200) DEFAULT NULL,
  `ProcessingPlace` varchar(200) DEFAULT NULL,
  `Supplier` varchar(200) DEFAULT NULL,
  `Color` varchar(50) DEFAULT NULL,
  `Material` varchar(100) DEFAULT NULL,
  `Quantity` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDItems`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'	1880000187661-mau3','Trung Quốc','OEM','	Trung Quốc','	Cty Văn Hoá Việt Văn','Trắng','	Nhựa, Vải',NULL),(2,'1880000186381-mau4','	Trung Quốc','	OEM','	Trung Quốc','Cty Văn Hoá Việt Văn','Nhiều màu','	Nhựa, Vải',NULL),(3,'6937168773115-mau2','	Trung Quốc','	OEM','	Trung Quốc','Cty TM Hạnh Thuận','Nhiều màu','	Giấy',NULL),(4,'	1503040810855-mau12','	Việt Nam','	Ngọc Phương','	Việt Nam','	Cty Văn Hóa Ngọc Phương','Nhiều màu','Giấy','	10'),(5,'1901011575695-mau2','	Trung Quốc','	XIAOQINGWA','	Trung Quốc','	Cty TM Hạnh Thuận','	Xanh Dương','	Nhựa',NULL),(6,'	8935276401041-mau1','Việt Nam','	B.bag','Việt Nam','Bình Tây','	Đen','	Vải','1'),(7,'8851907161446-mau2','	Thương Hiệu Thái Lan','	Elephant','	Ấn Độ','	Cty Fabico','	Nhựa, Kim Loại','	Nhựa, Kim Loại',NULL),(8,'6934274178186-mau1','Trung Quốc','	Kinary','Trung Quốc','Cty Fabico','	Xanh Mint','	Nhựa',NULL),(9,'8938530658243-mau1','	Việt Nam','	Vinashield','	Việt Nam','	Công Ty TNHH Dược và Trang Thiết Bị Y Tế Á Đông','Nhiều màu',NULL,NULL),(10,'8936098230123','	Việt Nam','Vina Oils','	Việt Nam','CÔNG TY CỔ PHẨN TẬP ĐOÀN QUỐC TẾ HA GROUP','Đen','	Nhựa',NULL),(11,'8938530658243-mau11','	Việt Nam','Vinashield','	Việt Nam','	Công Ty TNHH Dược và Trang Thiết Bị Y Tế Á Đông','	Nhiều màu',NULL,NULL),(12,'	8934578154204','Việt Nam','Điện Quang','Việt Nam','Cty Bóng Đèn Điện Quang','	Đỏ - Đen','	Nhựa, Kim Loại',NULL),(13,'9900000376697','	Thương Hiệu Nhật','Maxell','Indonesia','Cty Thu Trang','Đỏ - Trắng','	Kim Loại',NULL),(14,'1400000099261-mau3','	Thương Hiệu Nhật','Moshi Moshi','Thái Lan','Dn Tư Nhân Trường Vinh','	Xám','Nhựa',NULL),(15,'1801011716947-mau2','	Trung Quốc','DOTCOM','	Trung Quốc','	Cty Mai Thư','Đen',NULL,NULL),(16,'8936183830115','	Việt Nam','	Talk!','	Việt Nam','Công Ty TNHH Headfully','Xám',NULL,NULL),(17,'8936081250329','	Việt Nam','WAKAMONO','	Việt Nam','	Công Ty Cổ Phần WAKAMONO','	Trắng','	Vải',NULL),(18,'1507020063682-mau4','Trung Quốc','OEM','Trung Quốc','	Cty TM Hạnh Thuận','Xanh Dương',NULL,NULL),(19,'8936195060159','	Việt Nam','	FAMAPRO','	Việt Nam','Công Ty TNHH SX TM Thiết Bị Nam Anh','Đen','	Vải',NULL),(20,'	8936115290826','	Việt Nam','Á Châu','	Việt Nam','Công Ty TNHH Sản Xuất Thương Mại Kỹ Thuật Á Châu','	Trắng','Vải','	50');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `IDProduct` varchar(100) NOT NULL,
  `IDShop` int NOT NULL,
  `NameProduct` varchar(500) NOT NULL,
  `Image` varchar(400) NOT NULL,
  `Price` varchar(45) NOT NULL,
  `Weight` varchar(45) DEFAULT NULL,
  `PackagingSize` varchar(45) DEFAULT NULL,
  `Description` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`IDProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('	1880000187661-mau3',1,'Cài Tóc Có Khăn Voan Hoá Trang Halloween YL-35-2021 - Hình Đầu Lâu - Màu Trắng','image_244718_1_2714.jpg','29.000','	29','21 x 14 x 4','Cài Tóc Có Khăn Voan Hoá Trang Halloween YL-35-2021'),('	3300000002736',1,'Sách Giáo Khoa Bộ Lớp 1 - Sách Bài Tập - Bộ Sách Cánh Diều (Bộ 10 Cuốn - Không Vở Thực Hành Âm Nhạc) (2021)','image_243146.jpg','119.000','	2000','	24 x 17 x 0.5','Sách Giáo Khoa Bộ Lớp 1 - Sách Bài Tập - Bộ Sách Cánh Diều (Bộ 10 Cuốn - Không Vở Thực Hành Âm Nhạc) (2021)'),('	6934274178186-mau1',1,'Túi Zip A4 - Kinary FB8041 - Màu Xanh Mint','image_195708_1.jpg','18.500','	33','	32 x 25 x 0.3','Túi Zip A4 Kinary FB8041'),('	8851907161446-mau2',1,'Bấm Kim Số 10 Elephant Neon - Màu Đỏ','8851907161446-mau2-_3_.jpg','30.000','	60','	9.6 x 3.5 x 2','Bấm Kim Số 10 Elephant Neon'),('	8934578154204',1,'Đèn Bàn Điện Quang - ĐQ DKL03 B Chóa Sắt - Đỏ Đen - Có Bóng','image_191710.jpg','192.000','	800','20.3 x 16.3 x 14.3','Đèn Bàn Điện Quang - ĐQ DKL03 B Chóa Sắt - Đỏ Đen - Có Bóng'),('	8934974174530',1,'Ký Sinh Thú - Tập 2 - Tặng Kèm Bookmark','nxbtre_full_20482021_034813_2.jpg','45.000','200','17.6 x 11.3 ','Izumi Shinichi là một thiếu niên 17 tuổi. Một ngày nọ, những sinh vật lạ ngoài hành tinh đổ bộ xuống trái đất. Chúng ký sinh trong não người và chiếm quyền điều khiển cơ thể họ. Chúng được gọi là Ký sinh thú. Shinichi đã bị một Ký sinh thú chui vào tai nhằm chiếm đóng cơ thể cậu nhưng nó đã thất bại. Sau đó, nó xâm chiếm cánh tay phải của cậu. Shinichi và Ký sinh thú này buộc phải hợp tác, cùng tồn tại với nhau và chiến đấu chống lại những Ký sinh thú khác. Truyện không đơn thuần chỉ để giải trí mà còn ẩn chứa giá trị nhân văn sâu sắc, từng bước bóc trần được bản chất \"con\" của loài người.'),('	8935230000594',1,'Cắt Dán Hình 3D - Bé Khéo Tay - Bộ Khéo Tay','image_72851.jpg','29.000','	350','35 x 25','Cắt Dán Hình 3D - Bé Khéo Tay - Bộ Khéo Tay'),('	8935235226272',1,'Nhà Giả Kim (Tái Bản 2020)','image_195509_1_36793.jpg','67.150','	220','20.5 x 13','Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người. '),('	8935244859829',1,'Naruto Tập 62','naruto-tap-62.jpg','22.000','	200','17.6 x 11.3','Itachi đã ngăn chặn được Kabuto và “Uế Thổ Chuyển Sinh” gây hỗn loạn chiến trường cũng bị giải trừ! Dù được tận mắt chứng kiến hành động ấy, oán hận trong Sasuke vẫn không hề nguôi ngoai. Những lời sau cuối mà người anh trai yêu quý để lại cho cậu là gì!? Trong khi đó, cuộc chiến của nhóm Naruto càng lúc càng khốc liệt…!!'),('	8935276401041-mau1',1,'Ba Lô \"Tet Holiday\" Phong Cách Nhật B.bag - Màu Đen - B-23-023','image_188256_1.jpg','359.200','	490','40 x 37 x 10','Ba Lô Tet Holiday B-23-023 - Màu Đen được thiết kế theo phong cách Nhật Bản và nằm trong bộ sưu tập \"Tet Holiday\". Đây là dòng sản phẩm được giới trẻ rất yêu thích bởi tính tiện lợi và thời trang. Hình ảnh sử dụng mang đậm dấu ấn của ngày Tết như: hoa anh đào, chim én … kết hợp với màu sắc thời trang cá tính, tạo nét độc đáo và nổi bật, giúp người sử dụng dễ dàng kết hợp với nhiều loại trang phục.'),('	8935278602286',1,'Vương Triều Tudor Cuối Cùng','image_187926.jpg','220.000','	620','	16 x 24','Vương triều Tudor cuối cùng là một tác phẩm lịch sử về hoàng gia Anh thời Phục hưng, được sáng tác bởi một người uyên thâm về lịch sử, tác giả #1 theo bình chọn của New York Times - Philippa Gregory.'),('	8935278603191',1,'Công Thức Thành Công - Những Bí Quyết Thành Công Vượt Thời Gian Của Napoleon Hill','image_180851.jpg','90.000','	300','	14 x 20.5','“Nếu là vài năm trước đây, tôi đã không thể viết quyển sách này, bởi như Henry David Thoreau đã viết: “Thật hão huyền khi ngồi viết sách trong khi bạn còn chưa trải nghiệm cuộc sống”\"'),('	8936115290826',1,'Khẩu Trang Y Tế 4 Lớp Kháng Khuẩn Asia Medic 50 Cái - Màu Trắng','z2146815987279_b7827e08393c3a4777967d1ba09271f6.jpg','53.100','250','','Khẩu Trang Y Tế 4 Lớp Kháng Khuẩn'),('	9786045469705',1,'Tiếng Anh 1 English Discovery - Pupil Book','9786045469705.jpg','95.000','	169','	27 x 20.5 x 0.5','Tiếng Anh 1 English Discovery được Nhà xuất bản Đại học Sư phạm liên kết xuất bản với Nhà xuất bản Pearson biên soạn dành cho học sinh tiểu học mới bắt đầu học tiếng Anh và hoàn toàn phù hợp với Chương trình Làm quen tiếng Anh Lớp 1, 2 và Chương trình tiếng Anh cấp tiểu học trong Chương trình Giáo dục phổ thông mới (ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT). Sách giúp các em học sinh làm quen và phát triển kĩ năng ngoại ngữ thông qua nhiều hoạt động và nội dung hấp dẫn, phù hợp với lứa tuổi và văn hóa, truyền thống Việt Nam, cũng như bổ sung kiến thức và kĩ năng toàn cầu của thế kỉ XXI.'),('	9786049609688',1,'Tất Cả Các Dòng Sông Đều Chảy','6976308b510f0637f246c03046d60c60.jpg','83.000','600','	14.5 x 20.5','Tất cả các dòng sông.'),('1400000099261-mau3',1,'Vỉ Treo 4 Móc Moshi 017 - Màu Xám','image_195509_1_32425.jpg','70.000','	70','19 x 12 x 2','Vỉ Treo 4 Móc Moshi 017'),('1503040810855-mau12',1,'Bộ 10 Giấy Bao Tập Ngọc Phương - Mẫu 12','b1361582835c4a02134d.jpg','11.000','	20','35.5 x 25.5 x 0.2','Bộ 10 Giấy Bao Tập Ngọc Phương'),('1507020063682-mau4',1,'Thước Dây May - Màu Xanh','image_195509_1_12068.jpg','3.600','15','1 x 150','Thước Dây May'),('1801011716947-mau2',1,'Đồng Hồ Dotcom 3009 - Màu Đen','image_195509_1_14245.jpg','286.000','40',NULL,'Đồng Hồ Dotcom 3009'),('1880000186381-mau4',1,'Vòng Hoa Có Khăn Voan Hóa Trang Halloween 1607-9-2021 - Hình Ma Bí - Màu Trắng','image_244718_1_2688.jpg','22.000','	22','23 x 20 x 1 cm','Vòng Hoa Có Khăn Voan Hóa Trang Halloween 1607-9-2021'),('1901011575695-mau2',1,'Thước Kẻ 18 cm - XiaoQingWa 2094 - Màu Xanh','1901011575695-mau2-_2_.jpg','5.500','	10','19 x 3 x 0.3','Thước Kẻ 18 cm XiaoQingWa 2094'),('3300000001746',1,'Sách Giáo Khoa Bộ Lớp 1 Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)','3300000001746_bia.jpg','199.000','	1978','26.5 x 19 x 5.5','Bộ Sách Giáo Khoa Lớp 1 - Sách Bài Học - Bộ Sách Chân Trời Sáng Tạo (Bộ 9 Cuốn) (2021)'),('3300000004099',1,'Bộ Sách Giáo Khoa Lớp 1 - Sách Bài Học - Bộ Sách Chân Trời Sáng Tạo (Bộ 9 Cuốn) (2021)','b_-s_ch-ctst_1_3.jpg','186.000','1000','	26.5 x 19','Bộ Sách Giáo Khoa Lớp 1 - Sách Bài Tập - Bộ Sách Chân Trời Sáng Tạo (Bộ 11 Cuốn) (2021)'),('3300000004150',1,'Bộ Sách Giáo Khoa Lớp 1 - Sách Bài Tập - Bộ Sách Chân Trời Sáng Tạo (Bộ 11 Cuốn) (2021)','1124010357318_3.jpg','138.000','	2000','	26.5 x 19','Bộ Sách Giáo Khoa Lớp 1 - Sách Bài Tập - Bộ Sách Chân Trời Sáng Tạo (Bộ 11 Cuốn) (2021)'),('3300000006079',1,'Bên Dưới Cây Cầu Arakawa - Arakawa Under The Bridge - Tập 1 - Tặng Kèm Postcard','arakawa---tap-1.jpg','30.000','	200','	18 x 13','“Giúp tôi hiểu thế nào là yêu nhé?”'),('6937168773115-mau2',1,'Sổ Bìa Cứng Nhỏ Nút 64144-S002 - Hình Xe - Dây Cài Màu Nâu','6937168773115-mau2-_1_.jpg','83.000','	171','14.5 x 10.5 x 2','Sổ Bìa Cứng Nhỏ Nút 64144-S002 vô cùng bắt mắt bởi hình ảnh bìa được thiết kế rất dễ thương và ngộ nghĩnh.'),('8935235228351',1,'Cây Cam Ngọt Của Tôi','image_217480.jpg','108.000','280','	20 x 14.5','“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng sống... một tác phẩm kinh điển của Brazil.” - Booklist'),('8935244848335',1,'Dế Mèn Phiêu Lưu Ký - Ngô Mạnh Lân Minh Họa - Ấn Bản Kỉ Niệm 100 Năm Tô Hoài','image_195509_1_55895.jpg','150.000','	300','23 x 17','Gần 80 năm qua, kể từ ngày đầu tiên ra mắt bạn đọc, năm 1941, \"Dế Mèn phiêu lưu ký\" vẫn là một trong những sáng tác tâm đắc nhất của nhà văn Tô Hoài.'),('8935244858433',1,'Thiên Thần Diệt Thế - Seraph Of The End - Tập 12 (Tái Bản 2021)','thien-than-diet-the---tap-12---tb-2021.jpg','20.000','200','17.6 x 11.3 ','Ferid và Crowley xuất hiện trước mặt đội Shinoa - những người đang rút khỏi Đế Quỷ Quân. Nhận thấy sự chênh lệch sức mạnh quá rõ ràng, Yuichiro cùng đồng đội bị đẩy vào tình thế buộc phải hợp tác, không thể chạy trốn. Thứ Ferid đưa ra chính là!? Trong lúc đó, Guren đã trở về Shinjuku…'),('8935244859768',1,'Thiên Thần Diệt Thế - Tập 17','thien-than-diet-the---tap-17.jpg','20.000','	200','17.6 x 11.3','Thiên thần thổi kèn thứ 6 hiện đang bị phong ấn tại nhà riêng của Guren. Yuichiro quyết tâm'),('8935278602606',1,'Contact Marketing - Nghệ Thuật Chinh Phục Khách Hàng','image_232602.jpg','180.000','400','	20.5 x 14','Contact Marketing là gì?'),('8935325000980',1,'Từ Điển Tiếng “Em” - Tái Bản 2021','bia_tudientiengem-_1_.jpg','69.000','300','12 x 10','TỪ ĐIỂN TIẾNG “EM” – Định nghĩa về thế giới mới!'),('8936072917248',1,'Bộ Sách “Truyện Đọc Trước Giờ Đi Ngủ” - Bộ 4 Cuốn','b_-truy_n-_c-tr_c-gi_-_i-ng_.jpg','278.000','	300',NULL,'Bộ Sách “Truyện Đọc Trước Giờ Đi Ngủ”'),('8936081250329',1,'Khẩu Trang Y Tế 4 Lớp WAKAMONO Diệt Virus Corona 99% (10 Cái/Hộp)','untitled-1gjuj.jpg','45.000','	80','	22 x 10 x 3','Khẩu Trang Y Tế 4 Lớp WAKAMONO Diệt Virus Corona 99% (10 Cái/Hộp)'),('8936098230123',1,'Tinh Dầu Tràm Trà 10Ml - Vina Oils VN0011','image_244718_1_1758.jpg','90.250','	50','	10 x 2 x 2','Tinh Dầu Tràm Trà 10Ml Vina Oils VN0011'),('8936183830115',1,'Túi Đeo Chéo Simple Talk! Stormy Retreat - TDMS00102','image_187782.jpg','129.500','550','35 x 22 x 7','Túi Đeo Chéo Simple Talk! Stormy Retreat - TDMS00102'),('8936195060159',1,'Khẩu Trang Famapro Max 4 Lớp Màu Đen (40 Cái/Hộp)','untitled-6_18_8.jpg','30.400','	205','	19 x 10 x 8','Khẩu Trang Famapro Max 4 Lớp Màu Xanh'),('8938530658243-mau1',1,'Dung Dịch Rửa Tay Nhanh Cleanwel 30ml - Nàng Tiên Cá','img-8571_1.jpg','43.650','	40','	7.5 x 3 x 2','Dung Dịch Rửa Tay Nhanh Cleanwel 30ml'),('8938530658243-mau11',1,'Dung Dịch Rửa Tay Nhanh Cleanwel 30ml - Hình Gấu (Mẫu Màu Giao Ngẫu Nhiên)','938530658243-mau11-_1_.jpg','43.650','40','	7.5 x 3 x 2','Dung Dịch Rửa Tay Nhanh Cleanwel 30ml'),('9900000376697',1,'Pin Maxell AA Super Power Ace (2 Viên)','image_195509_1_29332.jpg','7.500','	35','5 × 2.8','Pin Maxell AA Super Power Ace');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-20 10:42:43
