"use client"
import React, { useRef } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Navbar from './Navbar'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useInView } from 'framer-motion' 

function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref,{once : false})
  return (
    <MaxWidthWrapper>
      <div id='home' className='bg-black min-h-[100vh] w-full flex items-center justify-center text-white relative overflow-hidden'>
        
        {/* Background geometric elements */}
        <div className='absolute top-0 right-0 w-64 h-64 border border-gray-800 rounded-full opacity-20 transform translate-x-32 -translate-y-32'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 border border-gray-700 opacity-10 transform -translate-x-48 translate-y-48'></div>
        
        <div className='w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20'>
          {/* Left Content Section */}
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
          className='flex-1 max-w-2xl text-center md:text-left'>
            {/* Small intro text */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-px bg-gray-400 hidden md:block'></div>
              <span className='text-gray-400 text-sm tracking-wider uppercase font-medium hidden md:block'>
                Welcome to my portfolio
              </span>
            </div>
            
            {/* Main heading */}
            <div className='mb-6'>
              <h1 className='text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4'>
                Hi, I'm{' '}
                <span className='text-gray-500 relative'>
                  {/* <Typewriter typeSpeed={150} words={['Amansai','Full Stack Dev','Problem Solver','Software Developer']} loop={true} cursor={true} cursorBlinking={true} /> */}
                  Amansai
                  <div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-800'></div>
                </span>
              </h1>
              <h2 className='text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300 leading-relaxed'>
                a Full Stack Developer turning{' '}
                <span className='font-medium text-white'>ideas</span> into{' '}
                <span className='font-medium text-white'>scalable products</span>.
              </h2>
            </div>
            
            {/* Description */}
            <p className='text-gray-400 text-lg leading-relaxed mb-8 max-w-xl'>
              Crafting modern web experiences with cutting-edge technologies. 
              Passionate about clean code, intuitive design, and delivering exceptional user experiences.
            </p>
            
           
            
            {/* CTA Buttons */}
            <div className='flex gap-4'>
              <button className='group relative px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 ease-out overflow-hidden'>
                <span className='relative z-10'>Get In Touch</span>
                <div className='absolute inset-0 bg-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out'></div>
              </button>
              <button className='group relative px-8 py-3 border border-gray-500 text-white font-medium hover:border-white transition-all duration-300 ease-out overflow-hidden'>
                <span className='relative z-10 group-hover:text-black transition-colors duration-300'><a href="#projects">View My Work</a></span>
                <div className='absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></div>
              </button>
            </div>
            
            {/* Social links */}
            <div className='flex items-center gap-4 mt-12'>
              <span className='text-gray-400 text-sm'>Follow me:</span>
              <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/amansai-kosireddi-5782b429b" className='w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300'>
                  <span className='text-sm font-medium'><Linkedin /></span>
                </a>
                <a href="https://github.com/Amansai12" target='_blank' className='w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300'>
                  <span className='text-sm font-medium'><Github /></span>
                </a>
                <a href="#" className='w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300'>
                  <span className='text-sm font-medium'><Twitter /></span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Image Section */}
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
          className='flex-1 '>
            <img src={'./img_4.jpeg'}/>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2'>
          <span className='text-gray-400 text-xs uppercase tracking-wider'>Scroll</span>
          <div className='w-px h-8 bg-gray-600 relative overflow-hidden'>
            <div className='w-full h-2 bg-white animate-pulse'></div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero