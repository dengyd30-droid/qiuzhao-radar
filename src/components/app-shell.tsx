'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bookmark, BriefcaseBusiness, LayoutDashboard, Radar, Sparkles, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { href:'/', label:'职位雷达', icon:Radar },
  { href:'/#companies', label:'公司状态', icon:BriefcaseBusiness },
  { href:'/#applications', label:'投递看板', icon:LayoutDashboard },
  { href:'/#favorites', label:'我的收藏', icon:Bookmark },
  { href:'/#profile', label:'求职画像', icon:UserRound },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-foreground text-white shadow-lg"><Radar className="size-5 text-amber-400" /></span>
            <div><div className="text-lg font-black tracking-tight">秋招雷达</div><div className="text-[11px] text-muted-foreground">机会，不错过</div></div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {items.slice(0,4).map(({ href,label,icon:Icon }, index) => <Link key={label} href={href} className={cn('nav-link', index===0 && pathname==='/' && 'nav-link-active')}><Icon className="size-4" />{label}</Link>)}
          </nav>
          <Link href="/#profile" className="flex items-center gap-2 rounded-full border bg-white p-1.5 pr-3 text-sm font-semibold shadow-sm transition hover:shadow-md"><span className="grid size-8 place-items-center rounded-full bg-amber-100 text-amber-700">邓</span><span className="hidden sm:inline">邓亚帝</span><Sparkles className="size-4 text-primary" /></Link>
        </div>
      </header>
      {children}
      <footer className="mt-16 border-t bg-white/60"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 秋招雷达 · 为每一次认真准备点亮信号</span><span>职位信息以企业招聘官网为准</span></div></footer>
    </div>
  )
}
