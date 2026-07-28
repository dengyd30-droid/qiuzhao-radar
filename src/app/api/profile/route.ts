import { NextResponse } from 'next/server'
const profile={ name:'邓亚帝', graduationYear:2027, degree:'本科', targetCities:['北京','上海'], targetRoles:['产品经理','AI 产品'], skills:['产品策略','数据分析','用户研究'], completeness:82 }
export async function GET(){ return NextResponse.json({data:profile}) }
export async function PUT(request:Request){ return NextResponse.json({data:{...profile,...await request.json(),updatedAt:new Date().toISOString()}}) }
