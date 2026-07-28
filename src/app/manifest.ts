import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest { return { name:'秋招雷达', short_name:'秋招雷达', description:'应届生秋招职位与投递管理平台', start_url:'/', display:'standalone', background_color:'#faf8f2', theme_color:'#d97706', icons:[{src:'/favicon.ico',sizes:'any'}] } }
