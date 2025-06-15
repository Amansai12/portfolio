"use client"
import React, { useState, useEffect } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { DotIcon } from 'lucide-react'
import { useScroll ,motion} from 'framer-motion'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const {scrollYProgress} = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <MaxWidthWrapper>
        <div className='flex items-center justify-center py-4'>
         

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8 relative'>
            {/* Left decorative line */}
            <div className='w-[500px] h-px bg-gradient-to-r from-transparent to-gray-600 relative'>
                <DotIcon className='absolute -top-3 -right-4 text-white' />
            </div>
            
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='group relative text-white hover:text-gray-300 transition-colors duration-300 py-2'
              >
                <span className='relative z-10 font-medium tracking-wide'>{item.name}</span>
                {/* Animated underline */}
                <div className='absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300'></div>
                {/* Hover background */}
                <div className='absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded'></div>
              </a>
            ))}
            
            {/* Right decorative line */}
            <div className='w-[500px] h-px bg-gradient-to-l from-transparent to-gray-600 relative'>
                <DotIcon className='absolute -top-3 -left-4 text-white' />
            </div>
          </div>

          {/* Right section - CTA + Mobile Menu */}
          <div className='flex items-center gap-4'>
            

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 group'
              aria-label="Toggle mobile menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className='py-4 border-t border-gray-800'>
            <div className='flex flex-col gap-1'>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='group flex items-center justify-between py-3 px-4 text-white hover:bg-white/10 transition-all duration-300 rounded'
                >
                  <span className='font-medium'>{item.name}</span>
                  <div className='w-4 h-4 flex items-center justify-center'>
                    <div className='w-1.5 h-1.5 border-t border-r border-white transform rotate-45 group-hover:translate-x-1 transition-transform duration-300'></div>
                  </div>
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className='px-4 pt-4 border-t border-gray-800 mt-2'>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block w-full text-center py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300'
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className='md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10'
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
       <motion.div
      className=" h-[1px] bg-white z-[999] w-full"
      style={{
        scaleX: scrollYProgress,
        transformOrigin:'left'
       
      }}
    />
    </nav>
   
    </>
  )
}

export default Navbar