# 秋招雷达：架构与 API 设计

## 产品信息架构

首页承担职位发现、每日新增和筛选；职位详情页呈现职责、要求、亮点与 AI 匹配解释；公司状态模块展示开放范围和截止日期；投递看板统一维护待投递、已投递、笔试、面试、Offer 与结束状态；求职画像维护毕业时间、学历、目标城市、目标岗位、技能和薪资偏好。

## 数据模型

核心实体包括 User、Company、Job、Favorite、Application 和 MatchScore。Company 与 Job 是一对多关系；User 通过 Favorite 和 Application 关联 Job；MatchScore 保存评分、命中理由、能力缺口、模型版本与计算时间。职位按发布时间以及城市、方向、学历建立索引，投递按用户和状态建立索引。

## API 约定

`GET /api/jobs` 查询岗位，支持 `q`、`city`、`category` 和 `daily=true`；`GET /api/jobs/:slug` 返回岗位详情；`GET /api/companies` 返回公司开放状态；`POST` 与 `DELETE /api/favorites` 新增或取消收藏；`GET`、`POST` 与 `PATCH /api/applications` 查询、新建或更新投递；`GET` 与 `PUT /api/profile` 读取或更新画像；`POST /api/matches` 计算岗位匹配评分。

成功响应统一为 `{ data, meta? }`，失败响应统一为 `{ message, issues? }`。生产版本应在 Route Handler 中加入会话鉴权、Zod 参数校验、分页游标、请求限流和审计日志。

## 匹配评分设计

MVP 采用 100 分规则模型。岗位方向占 30 分，技能重合占 25 分，城市偏好占 15 分，学历门槛占 10 分，薪资偏好占 10 分，项目和实习关键词占 10 分。响应同时输出 reasons 和 gaps，避免只给不可解释的单一分数。后续可采用“结构化硬筛选 + embedding 召回 + LLM 重排”，并持续保留规则兜底。

## 后续迭代

下一阶段重点是接入认证与真实 PostgreSQL 数据读写，实现企业官网采集和去重任务，加入截止日期提醒与订阅，提供拖拽式投递看板，并建设职位来源可信度和数据新鲜度指标。
