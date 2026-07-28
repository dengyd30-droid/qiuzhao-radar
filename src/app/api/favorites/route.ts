import { NextResponse } from 'next/server'
export async function POST(request:Request){ const body=await request.json(); return NextResponse.json({data:{userId:'demo-user',jobId:body.jobId,createdAt:new Date().toISOString()}},{status:201}) }
export async function DELETE(request:Request){ const {searchParams}=new URL(request.url); return NextResponse.json({data:{jobId:searchParams.get('jobId'),deleted:true}}) }
