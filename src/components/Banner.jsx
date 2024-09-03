import React, { useEffect } from 'react';
import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import image from '../assets/image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const Banner = () => {
   useEffect(()=>{
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div data-aos="fade-up" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome To <span className='text-fuchsia-500'>My Website</span></h1>
        <p data-aos="fade-left">
        I'm a passionate Front-End Developer skilled in crafting responsive and dynamic web applications. With a strong foundation in HTML, CSS, and JavaScript, and experience in frameworks like React, I bring creative designs to life with clean, efficient code. Let's build something amazing together!</p>
        <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-2'>
                    <a href="https://github.com/ShayanIsrar" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <AiFillGithub className='text-[28px]'/>
                    </a>
                    <a href="https://www.linkedin.com/in/shayan-israr-3ab45a304" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaLinkedinIn className='text-[28px]'/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <img data-aos="fade-up" src={image} width={320} height={320} className='rounded-3xl border-2 p-1 border-fuchsia-500 img_glow lg:h-80' alt="" />
    </div>
  )
}

export default Banner
