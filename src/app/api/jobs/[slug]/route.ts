import { NextResponse } from 'next/server'
import { jobs } from '@/lib/mock-data'
export async function GET(_: Request, { params }: { params: { slug: string } }) { const job=jobs.find(item=>item.slug===params.slug); return job ? NextResponse.json({data:job}) : NextResponse.json({message:'岗位不存在'},{status:404}) }
