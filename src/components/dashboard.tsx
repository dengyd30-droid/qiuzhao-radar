'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, BellRing, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronRight, CircleDot, Filter, Flame, MapPin, Search, Sparkles, Target, TrendingUp, UserRound } from 'lucide-react'
import { applications, companyStats, jobs } from '@/lib/mock-data'
import { JobCard } from './job-card'
import { cn } from '@/lib/utils'

const cities = ['全部城市','北京','上海','深圳','杭州','合肥']
const categories = ['全部方向','产品','技术','算法','数据','运营','设计']
const stageMeta = {
  SAVED:{label:'待投递',tone:'bg-stone-100 text-stone-700'}, APPLIED:{label:'已投递',tone:'bg-blue-100 text-blue-700'},
  WRITTEN_TEST:{label:'笔试',tone:'bg-violet-100 text-violet-700'}, INTERVIEW:{label:'面试',tone:'bg-amber-100 text-amber-800'},
  OFFER:{label:'Offer',tone:'bg-lime-100 text-lime-800'}, REJECTED:{label:'已结束',tone:'bg-rose-100 text-rose-700'},
}

export function Dashboard() {
  const [query,setQuery] = useState('')
  const [city,setCity] = useState('全部城市')
  const [category,setCategory] = useState('全部方向')
  const [newOnly,setNewOnly] = useState(false)
  const filtered = useMemo(()=>jobs.filter(job => {
    const matchesQuery = `${job.title}${job.company}${job.tags.join('')}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (city==='全部城市'||job.cities.includes(city)) && (category==='全部方向'||job.category===category) && (!newOnly||job.isNew)
  }),[query,city,category,newOnly])

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 lg:px-8 lg:pt-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_.6fr]">
          <div><div className="eyebrow flex items-center gap-2"><CircleDot className="size-3 animate-pulse" />2027 届秋招信号已增强</div><h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">把海量秋招信息，<span className="text-primary">变成你的机会雷达。</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">每日追踪企业招聘官网，用岗位画像和 AI 匹配帮你更快找到值得投递的机会。</p></div>
          <div className="paper-card relative overflow-hidden bg-foreground p-6 text-white"><div className="absolute -right-10 -top-12 size-36 rounded-full bg-amber-400/20 blur-2xl"/><BellRing className="size-7 text-amber-400"/><div className="mt-5 text-3xl font-black">186</div><p className="mt-1 text-sm text-white/65">今日新增岗位</p><div className="mt-5 flex items-center gap-2 text-sm font-semibold text-lime-300"><TrendingUp className="size-4" />较昨日增长 12.4%</div></div>
        </div>
        <div className="paper-card mt-8 p-3 sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-secondary/70 px-4"><Search className="size-5 text-muted-foreground"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索公司、岗位或技能，如 AI 产品经理" className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></label>
            <select value={city} onChange={e=>setCity(e.target.value)} className="h-12 rounded-xl border bg-white px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-ring">{cities.map(x=><option key={x}>{x}</option>)}</select>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="h-12 rounded-xl border bg-white px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-ring">{categories.map(x=><option key={x}>{x}</option>)}</select>
            <button onClick={()=>setNewOnly(!newOnly)} className={cn('flex h-12 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold transition',newOnly?'border-amber-300 bg-amber-100 text-amber-800':'bg-white hover:border-amber-300')}><Flame className="size-4"/>今日新增</button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_330px] lg:px-8">
        <div><div className="mb-5 flex items-end justify-between"><div><div className="eyebrow">职位列表</div><h2 className="mt-1 text-2xl font-black">为你推荐 {filtered.length} 个岗位</h2></div><button className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground sm:flex"><Filter className="size-4"/>更多筛选</button></div><div className="space-y-4">{filtered.map(job=><JobCard key={job.id} job={job}/>)}{!filtered.length&&<div className="paper-card p-12 text-center"><Search className="mx-auto size-8 text-muted-foreground"/><h3 className="mt-4 font-bold">暂时没有匹配岗位</h3><p className="mt-2 text-sm text-muted-foreground">放宽筛选条件，雷达可以扫描到更多机会。</p></div>}</div></div>
        <aside className="space-y-5">
          <div className="paper-card p-5"><div className="flex items-center justify-between"><div><div className="eyebrow">雷达速报</div><h3 className="mt-1 text-lg font-bold">本周招聘趋势</h3></div><span className="grid size-10 place-items-center rounded-xl bg-lime-100"><TrendingUp className="size-5 text-lime-700"/></span></div><div className="mt-5 space-y-4"><Metric label="技术岗热度" value="92%" width="92%"/><Metric label="产品岗热度" value="78%" width="78%"/><Metric label="数据岗热度" value="65%" width="65%"/></div><p className="mt-5 rounded-xl bg-secondary p-3 text-xs leading-5 text-muted-foreground">北京、上海岗位增长最快，AI 应用相关岗位连续 3 周上升。</p></div>
          <div className="paper-card bg-gradient-to-br from-amber-100 to-lime-100 p-5"><Sparkles className="size-6 text-amber-700"/><h3 className="mt-4 text-lg font-black">完善画像，匹配更准</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">补充项目经历和技能偏好，预计可提升 18% 推荐准确度。</p><a href="#profile" className="mt-5 flex items-center gap-2 text-sm font-bold text-amber-800">立即完善 <ArrowRight className="size-4"/></a></div>
        </aside>
      </section>

      <section id="companies" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 lg:px-8"><div className="flex items-end justify-between"><div><div className="eyebrow">公司秋招状态</div><h2 className="mt-1 text-3xl font-black">开放日历，一眼看懂</h2></div><button className="text-sm font-semibold text-primary">查看全部公司</button></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{companyStats.map((company,index)=><article key={company.name} className="paper-card p-5"><div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-secondary text-lg font-black">{company.logo}</span><span className={cn('rounded-full px-2.5 py-1 text-xs font-semibold',index===3?'bg-amber-100 text-amber-800':'bg-lime-100 text-lime-800')}>{company.status}</span></div><h3 className="mt-5 text-lg font-bold">{company.name}</h3><div className="mt-4 flex items-center justify-between text-sm text-muted-foreground"><span>{company.roles} 个岗位</span><span>截止 {company.deadline}</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary" style={{width:`${90-index*14}%`}}/></div></article>)}</div></section>

      <section id="applications" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 lg:px-8"><div className="eyebrow">投递状态看板</div><h2 className="mt-1 text-3xl font-black">每一步，都有下一步</h2><div className="mt-6 overflow-hidden rounded-2xl border bg-white/80 shadow-sm"><div className="grid grid-cols-[1.3fr_.8fr_.6fr] gap-4 border-b bg-secondary/50 px-5 py-3 text-xs font-semibold text-muted-foreground sm:grid-cols-[1.5fr_.8fr_.5fr_1fr]"><span>岗位</span><span>状态</span><span>匹配</span><span className="hidden sm:block">下一步</span></div>{applications.map(app=><div key={app.id} className="grid grid-cols-[1.3fr_.8fr_.6fr] items-center gap-4 border-b px-5 py-4 last:border-0 sm:grid-cols-[1.5fr_.8fr_.5fr_1fr]"><div><div className="font-bold">{app.job}</div><div className="text-xs text-muted-foreground">{app.company}</div></div><span className={cn('w-fit rounded-full px-2.5 py-1 text-xs font-semibold',stageMeta[app.stage].tone)}>{stageMeta[app.stage].label}</span><span className="font-bold text-amber-700">{app.score}%</span><span className="hidden text-sm text-muted-foreground sm:block">{app.next}</span></div>)}</div></section>

      <section id="profile" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 lg:px-8"><div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]"><div className="paper-card overflow-hidden bg-foreground p-7 text-white"><UserRound className="size-7 text-amber-400"/><p className="mt-8 text-sm text-white/60">我的求职画像</p><h2 className="mt-2 text-3xl font-black">产品 × AI 应用</h2><div className="mt-6 flex flex-wrap gap-2">{['2027 届','北京 / 上海','互联网','产品策略','数据分析'].map(x=><span key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-xs">{x}</span>)}</div><div className="mt-8"><div className="flex justify-between text-sm"><span>画像完整度</span><b className="text-lime-300">82%</b></div><div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-amber-400 to-lime-400"/></div></div></div><div className="paper-card p-7"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-amber-100"><Target className="size-5 text-amber-700"/></span><div><div className="eyebrow">AI 匹配洞察</div><h3 className="text-xl font-black">你最适合的机会特征</h3></div></div><div className="mt-6 grid gap-4 sm:grid-cols-3"><Insight icon={CheckCircle2} title="强匹配" text="产品策略、用户洞察、AI 应用"/><Insight icon={MapPin} title="地域偏好" text="北京与上海机会密度最高"/><Insight icon={CalendarDays} title="投递窗口" text="未来 14 天是集中开放期"/></div><button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5"><Sparkles className="size-4"/>重新计算岗位匹配</button></div></div></section>
    </main>
  )
}

function Metric({label,value,width}:{label:string,value:string,width:string}) { return <div><div className="mb-2 flex justify-between text-sm"><span>{label}</span><b>{value}</b></div><div className="h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-lime-400" style={{width}}/></div></div> }
function Insight({icon:Icon,title,text}:{icon:typeof CheckCircle2,title:string,text:string}) { return <div className="rounded-2xl bg-secondary/70 p-4"><Icon className="size-5 text-primary"/><h4 className="mt-3 font-bold">{title}</h4><p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p></div> }
