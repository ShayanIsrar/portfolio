import React from 'react'

import image from '../assets/image.jpg'
const About = () => {
  return (
    
    <div id="/About" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos="fade-down" src={image} width={320} height={320} className='rounded border-2 p-1 border-fuchsia-500 img_glow lg:h-80' alt="" />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>About me</h1>
        <p data-aos="fade-left">I am a passionate and skilled Front-End Developer with a strong foundation in building responsive and dynamic web applications. I possess expertise in HTML, CSS, and JavaScript, and I have hands-on experience with modern front-end frameworks and libraries, including React.js. My proficiency extends to using Bootstrap and Tailwind CSS for efficient UI development and utilizing Styled Components for CSS-in-JS styling. I also have experience with Framer Motion for creating interactive animations and user experiences. I am committed to writing clean, maintainable code and continuously improving my skills to deliver high-quality web solutions.</p>
        <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-2'>
                    <a href="https://www.canva.com/design/DAGPrJA05pM/s3lagEJe4n54VnS5OybQyA/edit?utm_content=DAGPrJA05pM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                    <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button>
                    </a>
                    

                </div>
            </div>
        </div>
      </div>
      
    
    </div>
      
 
  )
}

export default About
