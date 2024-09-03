import React from 'react'
import imag from '../assets/main.webp'
import blog from '../assets/blog.png'
import fresh from '../assets/fresh.png'
import news from '../assets/news.png'
const Projects = () => {
  return (
    <div id='/Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <a href="https://responsive-blog-6bnlck2l7-shayan-isrars-projects.vercel.app" target="_blank" rel="noopener noreferrer">
        <img data-aos="fade-up" width={300} className='text-[26px] h-[230px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={blog} alt="" />
        </a>
        <a href="https://restaurant-ei6s0hd1w-shayan-isrars-projects.vercel.app" target="_blank" rel="noopener noreferrer">
        <img data-aos="fade-down" width={300} className='text-[26px] h-[230px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={fresh} alt="" />
        </a>
        <a href="https://news-website-onk4cl3rp-shayan-isrars-projects.vercel.app" target="_blank" rel="noopener noreferrer">
        <img data-aos="fade-up" width={300} className='text-[26px] h-[230px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={news} alt="" />
        </a>
        
      </div>
    </div>
  )
}

export default Projects
