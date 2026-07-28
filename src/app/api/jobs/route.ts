import { NextRequest, NextResponse } from 'next/server'
import { jobs } from '@/lib/mock-data'

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const query = params.get('q')?.toLowerCase() ?? ''
  const city = params.get('city')
  const category = params.get('category')
  const daily = params.get('daily') === 'true'
  const data = jobs.filter(job => `${job.title}${job.company}${job.tags.join('')}`.toLowerCase().includes(query) && (!city || job.cities.includes(city)) && (!category || job.category === category) && (!daily || job.isNew))
  return NextResponse.json({ data, meta: { total: data.length, page: 1, pageSize: 20 } })
}
