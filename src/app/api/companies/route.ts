import { NextResponse } from 'next/server'
import { companyStats } from '@/lib/mock-data'
export async function GET() { return NextResponse.json({ data: companyStats }) }
