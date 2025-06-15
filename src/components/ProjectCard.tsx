"use client"
import { Github, Link, Linkedin } from 'lucide-react'
import React from 'react'

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  linkedinLink?: string;
}

function ProjectCard({title, description, image, liveLink, githubLink, linkedinLink}: ProjectCardProps) {
    
  return (
    <div 
    
    className='text-white overflow-hidden max-w-[350px] bg-black/20 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl hover:shadow-white/10 hover:border-white/30 transition-all duration-500 hover:scale-102'>
        <div className='w-full relative overflow-hidden'>
            <img 
              className='w-full object-cover transition-transform duration-700 hover:scale-110' 
              src={image} 
              alt="Digital Civic Engagement Platform" 
            />
            {/* <Image alt='' src={'./p_1.jpeg'} width={'100'} height={100}/> */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
        </div>
        
        <div className='p-6 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm'>
            <h1 className='text-xl font-bold mb-4 text-center tracking-wide text-white'>
              {title}
            </h1>
            <p className='text-sm text-white/80 text-center leading-relaxed mb-6'>
              {description}
            </p>
            
            <div className='flex gap-3 w-full justify-center items-center'>
                <a 
                  href={linkedinLink} 
                  target='_blank'
                  className='w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group'
                >
                  <Linkedin size={18} className='group-hover:scale-110 transition-transform duration-300' />
                </a>
                <a 
                  href={githubLink}
                  target='_blank' 
                  className='w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group'
                >
                  <Github size={18} className='group-hover:scale-110 transition-transform duration-300' />
                </a>
                <a 
                  href={liveLink}
                  target='_blank' 
                  className='w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group'
                >
                  <Link size={18} className='group-hover:scale-110 transition-transform duration-300' />
                </a>
            </div>
        </div>

        {/* Decorative glass reflection */}
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
          <div className='absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/5 to-transparent opacity-50'></div>
        </div>
    </div>
  )
}

export default ProjectCard