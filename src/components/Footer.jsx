import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'>Shayan</span>
          <p className='text-[16px] my-4'>I'm a passionate Front-End Developer skilled in crafting responsive and dynamic web applications. With a strong foundation in HTML, CSS, and JavaScript, and experience in frameworks like React.</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>MERN Stack</li>
            <li className='my-2'>SEO</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: shayanisrar19@gmail.com</p>
          <p className='text-[16px] my-4'>Phone: +92 322-1926366</p>
        </div>
        <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
        <div className='flex space-x-4'>
          <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://github.com/ShayanIsrar">
            <FaGithub/>
          </a>
          <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://www.linkedin.com/in/shayan-israr-3ab45a304">
            <FaLinkedinIn/>
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
