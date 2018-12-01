-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.0.17-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 test_log_system 的数据库结构
CREATE DATABASE IF NOT EXISTS `test_log_system` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `test_log_system`;


-- 导出  表 test_log_system.biz_system 结构
CREATE TABLE IF NOT EXISTS `biz_system` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '业务系统名称',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 数据导出被取消选择。


-- 导出  表 test_log_system.biz_system_log 结构
CREATE TABLE IF NOT EXISTS `biz_system_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `system_id` varchar(50) NOT NULL COMMENT '系统ID',
  `log_level` varchar(50) DEFAULT NULL COMMENT '日志级别',
  `log_message` text COMMENT '日志内容',
  `att_data` text COMMENT '附加数据',
  `stack_info` text COMMENT '堆栈信息',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `system_id` (`system_id`),
  KEY `log_level` (`log_level`),
  KEY `create_time` (`create_time`),
  FULLTEXT KEY `log_message` (`log_message`),
  FULLTEXT KEY `att_data` (`att_data`),
  FULLTEXT KEY `stack_info` (`stack_info`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 数据导出被取消选择。


-- 导出  表 test_log_system.sys_log 结构
CREATE TABLE IF NOT EXISTS `sys_log` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `PLATFORM` tinyint(4) DEFAULT NULL COMMENT '请见PlatformType枚举',
  `LOGTIME` varchar(25) DEFAULT NULL,
  `THREAD` varchar(10) DEFAULT NULL,
  `LOGLEVEL` varchar(10) DEFAULT NULL,
  `LOGGER` varchar(2000) DEFAULT NULL,
  `LOGMESSAGE` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 数据导出被取消选择。


-- 导出  表 test_log_system.sys_rec_mail 结构
CREATE TABLE IF NOT EXISTS `sys_rec_mail` (
  `ID` varchar(36) NOT NULL,
  `MAIL_ADDRESS` varchar(30) NOT NULL COMMENT '邮件地址',
  `TITLE` varchar(100) NOT NULL COMMENT '邮件标题',
  `CONTENT` varchar(21000) NOT NULL COMMENT '邮件内容',
  `OP_TIME` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发送时间',
  `OP_ID` varchar(36) DEFAULT NULL COMMENT '发送者ID',
  `OP_IP` varchar(15) NOT NULL COMMENT '发送者IP',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
