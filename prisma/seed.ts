import { EducationLevel, JobType, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({ where:{email:'dengyadi.30@bytedance.com'}, update:{}, create:{ email:'dengyadi.30@bytedance.com', name:'邓亚帝', graduationAt:new Date('2027-06-30'), school:'示例大学', major:'信息管理', degree:EducationLevel.BACHELOR, targetCities:['北京','上海'], targetRoles:['产品经理','AI 产品'], skills:['产品策略','数据分析','用户研究'], minSalary:18000 } })
  const company = await prisma.company.upsert({ where:{slug:'bytedance'}, update:{}, create:{ name:'字节跳动', slug:'bytedance', logo:'字', industry:'互联网', size:'10000 人以上', location:'北京', recruitmentStatus:'OPEN', recruitmentUrl:'https://jobs.bytedance.com/campus', openedAt:new Date('2026-07-01'), closesAt:new Date('2026-09-30'), verifiedAt:new Date() } })
  const job = await prisma.job.upsert({ where:{slug:'bytedance-ai-product-manager'}, update:{}, create:{ title:'AI 产品经理（校招）', slug:'bytedance-ai-product-manager', companyId:company.id, description:'参与 AI 产品从洞察、规划到落地的完整过程。', responsibilities:['研究用户需求与行业趋势','协同算法、研发与设计推进产品落地','建立核心指标并持续迭代'], requirements:['2027 届本科及以上','对 AI 产品有实践经历','具备结构化分析能力'], highlights:['核心 AI 业务','导师制培养','转正通道明确'], city:'北京', cities:['北京','上海'], category:'产品', jobType:JobType.FULL_TIME, education:EducationLevel.BACHELOR, salaryMin:25000, salaryMax:40000, salaryMonths:15, publishedAt:new Date(), deadlineAt:new Date('2026-09-30') } })
  await prisma.matchScore.upsert({ where:{userId_jobId:{userId:user.id,jobId:job.id}}, update:{score:94}, create:{userId:user.id,jobId:job.id,score:94,reasons:['目标方向一致','城市偏好一致','技能相关'],gaps:[]} })
  console.log(`Seeded ${user.name} and ${job.title}`)
}
main().finally(()=>prisma.$disconnect())
