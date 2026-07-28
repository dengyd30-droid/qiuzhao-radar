'use client'

import Link from 'next/link'
import { Bookmark, Building2, CalendarClock, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { JobView } from '@/lib/types'
import { cn } from '@/lib/utils'

export function JobCard({ job }: { job: JobView }) {
  const [saved,setSaved] = useState(false)
  return (
    <article className="paper-card group p-5">
      <div className="flex gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-100 to-lime-100 text-lg font-black text-amber-800">{job.companyLogo}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div><Link href={`/jobs/${job.slug}`} className="text-lg font-bold tracking-tight hover:text-primary">{job.title}</Link><div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><Building2 className="size-3.5" />{job.company}<span>·</span><MapPin className="size-3.5" />{job.city}</div></div>
            <button type="button" aria-label="收藏岗位" onClick={()=>setSaved(!saved)} className={cn('grid size-9 place-items-center rounded-full border transition', saved ? 'border-amber-300 bg-amber-100 text-primary' : 'bg-white text-muted-foreground hover:border-amber-300 hover:text-primary')}><Bookmark className={cn('size-4', saved && 'fill-current')} /></button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">{job.tags.map(tag=><span key={tag} className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium">{tag}</span>)}</div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <div className="flex items-center gap-4 text-xs text-muted-foreground"><span className="font-semibold text-foreground">{job.salary}</span><span className="flex items-center gap-1"><CalendarClock className="size-3.5" />{job.deadline}</span>{job.isNew && <span className="rounded-full bg-lime-100 px-2 py-1 font-semibold text-lime-800">今日新增</span>}</div>
            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-700"><Sparkles className="size-4" />匹配 {job.matchScore}%</div>
          </div>
        </div>
      </div>
    </article>
  )
}
