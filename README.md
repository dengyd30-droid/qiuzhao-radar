# 秋招雷达

秋招雷达是面向应届生的秋招职位发现与投递管理 Web 产品。MVP 提供职位聚合、每日新增、公司秋招状态、筛选与详情、收藏、投递看板、求职画像和可解释的岗位匹配评分。

## 技术栈

Next.js 14 App Router、TypeScript、Tailwind CSS、shadcn/ui / Radix UI、Prisma 和 PostgreSQL。

## 本地启动

先执行 `pnpm install`，复制 `.env.example` 为 `.env` 并配置 PostgreSQL 连接。随后执行 `pnpm db:push`、`pnpm db:seed` 和 `pnpm dev`。开发地址为 `http://localhost:3000`。

当前界面和 API 带有可直接预览的演示数据。接入数据库后，可将 Route Handler 中的 mock 数据读取替换为 `prisma` 查询；数据模型、索引和种子脚本已经准备好。

## 项目结构

`src/app` 存放页面和 Route Handler；`src/components` 存放业务组件及 shadcn/ui 组件；`src/lib` 存放 Prisma 单例、类型和演示数据；`prisma` 存放数据库 schema 与种子脚本；`docs` 存放架构与 API 设计。

## 常用命令

`pnpm dev` 启动开发环境，`pnpm typecheck` 执行类型检查，`pnpm build` 执行生产构建，`pnpm db:generate` 生成 Prisma Client，`pnpm db:push` 同步本地数据库，`pnpm db:seed` 写入演示数据。

## MVP 边界

匹配评分目前采用可解释规则模型，综合求职方向、城市、学历、技能和薪资偏好。后续可在保持 API 响应结构不变的前提下替换为向量召回与大模型重排。身份认证、职位采集任务、消息提醒和管理后台留待下一阶段。
