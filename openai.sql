/*
 Navicat Premium Data Transfer

 Source Server         : 43.139.146.34
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : 43.139.146.34:3306
 Source Schema         : openai

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 31/08/2023 17:42:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;



CREATE DATABASE openai;

-- ----------------------------
-- Table structure for chatgpt_msg_web
-- ----------------------------
DROP TABLE IF EXISTS `chatgpt_msg_web`;
CREATE TABLE `chatgpt_msg_web`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NULL DEFAULT 0,
  `user_id` int(11) NULL DEFAULT NULL,
  `group_id` int(11) NULL DEFAULT 0,
  `topic_id` int(11) NULL DEFAULT 0,
  `activity_id` int(11) NULL DEFAULT 0,
  `prompt_id` int(11) NULL DEFAULT 0,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `message_input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `response_input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `total_tokens` int(11) NULL DEFAULT 0,
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '【web】的聊天消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for chatgpt_msg_write
-- ----------------------------
DROP TABLE IF EXISTS `chatgpt_msg_write`;
CREATE TABLE `chatgpt_msg_write`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NULL DEFAULT 0,
  `user_id` int(11) NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `topic_id` int(11) NULL DEFAULT 0,
  `activity_id` int(11) NULL DEFAULT 0,
  `prompt_id` int(11) NULL DEFAULT 0,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `message_input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `response_input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `text_request` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `total_tokens` int(11) NULL DEFAULT 0,
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '【创作】的聊天消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for chatgpt_user
-- ----------------------------
DROP TABLE IF EXISTS `chatgpt_user`;
CREATE TABLE `chatgpt_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NULL DEFAULT 0,
  `openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '小程序openid',
  `openid_mp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公众号openid',
  `unionid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `balance` int(11) NULL DEFAULT 0 COMMENT '余额条数',
  `vip_expire_time` bigint(20) NULL DEFAULT 0 COMMENT 'vip到期时间',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tuid` int(11) NULL DEFAULT 0 COMMENT '推荐人ID',
  `commission_level` int(11) NULL DEFAULT 0 COMMENT '分销等级（暂留）',
  `commission_money` int(11) NULL DEFAULT 0 COMMENT '可提现佣金余额',
  `commission_paid` int(11) NULL DEFAULT 0 COMMENT '已提现佣金',
  `commission_frozen` int(11) NULL DEFAULT 0 COMMENT '冻结中的佣金',
  `commission_total` int(11) NULL DEFAULT 0 COMMENT '总佣金',
  `commission_pid` int(11) NULL DEFAULT 0 COMMENT '上级分销商',
  `commission_ppid` int(11) NULL DEFAULT 0 COMMENT '上上级分销商',
  `commission_time` int(11) NULL DEFAULT 0 COMMENT '成为分销商的时间',
  `gender` int(11) NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `birthday` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `realname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `status` tinyint(1) NULL DEFAULT 1,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT 0 COMMENT '1：注销',
  `is_freeze` tinyint(1) NULL DEFAULT 0 COMMENT '1：冻结',
  `freeze_time` bigint(20) NULL DEFAULT 0,
  `last_login_time` bigint(20) NULL DEFAULT 0,
  `update_time` bigint(20) NULL DEFAULT NULL,
  `create_time` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for merchant_keys
-- ----------------------------
DROP TABLE IF EXISTS `merchant_keys`;
CREATE TABLE `merchant_keys`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `merchant_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api名称',
  `merchant_keys` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api秘钥',
  `total_tokens` int(11) NULL DEFAULT 0 COMMENT '商家api总token',
  `use_token` int(11) NULL DEFAULT 0 COMMENT '商家api已使用token',
  `residue_token` int(11) NULL DEFAULT 0 COMMENT '商家api剩余token',
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `expire_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商家api的秘钥' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for merchant_msg_web
-- ----------------------------
DROP TABLE IF EXISTS `merchant_msg_web`;
CREATE TABLE `merchant_msg_web`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `merchant_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api名称',
  `merchant_key_id` bigint(20) NULL DEFAULT NULL COMMENT '商家key id',
  `merchant_keys` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商家api秘钥',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `input_token` int(11) NULL DEFAULT NULL COMMENT '请求token数量',
  `input_price` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '请求金额',
  `response_token` int(11) NULL DEFAULT NULL COMMENT '响应token数量',
  `response_price` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '响应金额',
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商家api请求数据',
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商家api响应数据',
  `total_tokens` int(11) NULL DEFAULT 0 COMMENT '总消耗token',
  `total_price` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总消耗金额',
  `is_delete` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `use_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期字符串',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_keys_time`(`merchant_keys`, `create_time`) USING BTREE,
  INDEX `index_time`(`create_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商家api的聊天消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_channel_key
-- ----------------------------
DROP TABLE IF EXISTS `t_channel_key`;
CREATE TABLE `t_channel_key`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `channel_id` bigint(20) NOT NULL COMMENT '渠道id',
  `channel_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '秘钥',
  `is_open` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否打开 true：打开 false：关闭',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '最后更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '渠道秘钥' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_config_data
-- ----------------------------
DROP TABLE IF EXISTS `t_config_data`;
CREATE TABLE `t_config_data`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '配置Key',
  `config_value` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '配置值',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '添加时间',
  `update_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '最后更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant`;
CREATE TABLE `t_merchant`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '邮箱',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '密码',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_key
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_key`;
CREATE TABLE `t_merchant_key`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `merchant_id` bigint(20) NULL DEFAULT NULL COMMENT '所属商家',
  `secret_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '秘钥',
  `content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内容',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `total_price` int(11) NULL DEFAULT 0 COMMENT '总额度',
  `use_price` int(11) NULL DEFAULT 0 COMMENT '已使用额度',
  `residue_price` int(11) NULL DEFAULT 0 COMMENT '已使用额度',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总额度b',
  `use_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '已使用额度b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余额度b',
  `is_open` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否打开 true：打开 false：关闭',
  `weight` int(11) NULL DEFAULT 1 COMMENT '权重',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '添加时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户key信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_private_key
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_private_key`;
CREATE TABLE `t_merchant_private_key`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `merchant_id` bigint(20) NULL DEFAULT NULL COMMENT '所属商家',
  `merchant_key_id` bigint(20) NULL DEFAULT NULL COMMENT '商家key id',
  `private_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '私钥key',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `total_price` int(11) NULL DEFAULT 0 COMMENT '总额度',
  `use_price` int(11) NULL DEFAULT 0 COMMENT '已使用额度',
  `residue_price` int(11) NULL DEFAULT 0 COMMENT '剩余额度',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总额度b',
  `use_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '已使用额度b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余额度b',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '添加时间',
  `expire_time` datetime(0) NULL DEFAULT NULL COMMENT '过期时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户私钥key信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_merchant_private_price
-- ----------------------------
DROP TABLE IF EXISTS `t_merchant_private_price`;
CREATE TABLE `t_merchant_private_price`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `private_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '私钥key',
  `model` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ChatGPT模型',
  `input_price` int(11) NULL DEFAULT NULL COMMENT '请求金额',
  `response_price` int(11) NULL DEFAULT NULL COMMENT '响应金额',
  `total_price` int(11) NULL DEFAULT 0 COMMENT '总消耗金额',
  `residue_price` int(11) NULL DEFAULT 0 COMMENT '剩余额度',
  `input_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '请求金额b',
  `response_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '响应金额b',
  `total_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '总消耗金额b',
  `residue_price_b` decimal(10, 6) NULL DEFAULT 0.000000 COMMENT '剩余金额b',
  `deleted` tinyint(1) NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `use_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期字符串',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_private_key_date`(`private_key`, `use_date`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '商户私钥key使用金额统计' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
