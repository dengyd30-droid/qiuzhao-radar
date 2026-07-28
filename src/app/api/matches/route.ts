import { NextResponse } from 'next/server'
import { jobs } from '@/lib/mock-data'
export async function POST(request:Request){ const {jobId}=await request.json(); const job=jobs.find(item=>item.id===jobId); if(!job)return NextResponse.json({message:'岗位不存在'},{status:404}); return NextResponse.json({data:{jobId,score:job.matchScore,reasons:[`目标方向与${job.category}岗位一致`,`${job.city}在目标城市内`,`${job.tags[0]}技能相关`],gaps:job.matchScore<85?['建议补充相关项目成果与量化指标']:[],model:'rules-v1'}}) }
