import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '秋招雷达｜发现更适合你的校招机会',
  description: '聚合秋招职位、追踪招聘进度、管理投递状态，并用 AI 评估岗位匹配度。',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
