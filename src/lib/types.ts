export type RecruitmentStatus = 'OPEN' | 'PARTIALLY_OPEN' | 'CLOSED' | 'NOT_OPEN'
export type ApplicationStage = 'SAVED' | 'APPLIED' | 'WRITTEN_TEST' | 'INTERVIEW' | 'OFFER' | 'REJECTED'

export type JobView = {
  id: string
  slug: string
  title: string
  company: string
  companySlug: string
  companyLogo: string
  recruitmentStatus: RecruitmentStatus
  city: string
  cities: string[]
  category: string
  education: string
  salary: string
  publishedAt: string
  deadline: string
  isNew: boolean
  matchScore: number
  tags: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  highlights: string[]
}
