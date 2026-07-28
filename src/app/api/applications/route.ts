import { NextResponse } from 'next/server'
import { applications } from '@/lib/mock-data'
export async function GET() { return NextResponse.json({ data: applications }) }
export async function POST(request: Request) { const body=await request.json(); return NextResponse.json({ data:{ id:crypto.randomUUID(), ...body, createdAt:new Date().toISOString() } },{status:201}) }
export async function PATCH(request: Request) { const body=await request.json(); return NextResponse.json({ data:{ ...body, updatedAt:new Date().toISOString() } }) }
