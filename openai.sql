/*
 Navicat Premium Data Transfer

 Source Server         : 158.178.244.251
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : 158.178.244.251:3306
 Source Schema         : openai

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 28/07/2023 20:14:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS `openai`;
USE `openai`;

-- ----------------------------
-- Table structure for merchant_keys
-- ----------------------------
DROP TABLE IF EXISTS `merchant_keys`;
CREATE TABLE `merchant_keys`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `merchant_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api名称',
  `merchant_keys` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api秘钥',
  `total_tokens` int(0) NULL DEFAULT 0 COMMENT '商家api总token',
  `use_token` int(0) NULL DEFAULT 0 COMMENT '商家api已使用token',
  `residue_token` int(0) NULL DEFAULT 0 COMMENT '商家api剩余token',
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `expire_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商家api的秘钥' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for merchant_msg_web
-- ----------------------------
DROP TABLE IF EXISTS `merchant_msg_web`;
CREATE TABLE `merchant_msg_web`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `merchant_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api名称',
  `merchant_keys` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api秘钥',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `input_token` int(0) NULL DEFAULT NULL COMMENT '请求token数量',
  `response_token` int(0) NULL DEFAULT NULL COMMENT '响应token数量',
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商家api请求数据',
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商家api响应数据',
  `total_tokens` int(0) NULL DEFAULT 0 COMMENT '总消耗token',
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `use_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期字符串',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_keys_time`(`merchant_keys`, `create_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26705 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商家api的聊天消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant`;
CREATE TABLE `t_merchant`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '邮箱',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '密码',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 91 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_key
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_key`;
CREATE TABLE `t_merchant_key`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `merchant_id` bigint(0) NULL DEFAULT NULL COMMENT '所属商家',
  `secret_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '秘钥',
  `content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `total_price` int(0) NULL DEFAULT 0 COMMENT '总额度',
  `use_price` int(0) NULL DEFAULT 0 COMMENT '已使用额度',
  `residue_price` int(0) NULL DEFAULT 0 COMMENT '已使用额度',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总额度b',
  `use_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '已使用额度b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余额度b',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '添加时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户key信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_private_key
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_private_key`;
CREATE TABLE `t_merchant_private_key`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `merchant_id` bigint(0) NULL DEFAULT NULL COMMENT '所属商家',
  `merchant_key_id` bigint(0) NULL DEFAULT NULL COMMENT '商家key id',
  `private_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '私钥key',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `total_price` int(0) NULL DEFAULT 0 COMMENT '总额度',
  `use_price` int(0) NULL DEFAULT 0 COMMENT '已使用额度',
  `residue_price` int(0) NULL DEFAULT 0 COMMENT '剩余额度',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总额度b',
  `use_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '已使用额度b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余额度b',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '添加时间',
  `expire_time` datetime(0) NULL DEFAULT NULL COMMENT '过期时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 199 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户私钥key信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_private_price
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_private_price`;
CREATE TABLE `t_merchant_private_price`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `private_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '私钥key',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `input_price` int(0) NULL DEFAULT NULL COMMENT '请求金额',
  `response_price` int(0) NULL DEFAULT NULL COMMENT '响应金额',
  `total_price` int(0) NULL DEFAULT 0 COMMENT '总消耗金额',
  `residue_price` int(0) NULL DEFAULT 0 COMMENT '剩余额度',
  `input_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '请求金额b',
  `response_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '响应金额b',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总消耗金额b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余金额b',
  `deleted` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `use_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期字符串',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_private_key_date`(`private_key`, `use_date`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8985 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户私钥key使用金额统计' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;







