import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Mail, Phone, MapPin, Send, DotIcon, LocationEdit, LocateFixedIcon } from 'lucide-react'

function Contact() {
  return (
    <MaxWidthWrapper>
      <div className="py-16">
        {/* Header Section */}
        <div className="flex items-center my-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent to-gray-600 relative">
          <DotIcon className="absolute -top-3 -right-4 text-white" />
        </div>
        <h1 className="text-3xl w-1/2 text-white text-center font-bold">
          Get In Touch
        </h1>
        <div className="w-full h-px bg-gradient-to-l from-transparent to-gray-600 relative">
          <DotIcon className="absolute -top-3 -left-4 text-white" />
        </div>
          
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row justify-evenly pt-10 w-full text-white gap-4">
          <div>
            <h1 className='text-2xl font-bold'>Contact Information</h1>
            <div className='flex flex-col gap-6 my-6'>
              <div>
              <div className='flex items-center gap-2'>
                <Mail size={20} className='text-gray-400'/>
                <h1 className='text-xl font-semibold text-gray-400'>Email</h1>
              </div>
              <h1 className='text-gray-200'>saiaman88888@gmail.com</h1>
            </div>
              <div>
              <div className='flex items-center gap-2'>
                <Phone size={20} className='text-gray-400'/>
                <h1 className='text-xl font-semibold text-gray-400'>Phone</h1>
              </div>
              <h1 className='text-gray-200'>+91 9347895644</h1>
            </div>
              <div>
              <div className='flex items-center gap-2'>
                <LocateFixedIcon size={20} className='text-gray-400'/>
                <h1 className='text-xl font-semibold text-gray-400'>Address</h1>
              </div>
              <h1 className='text-gray-200'>Parvathipuram, Andhra Pradesh, India</h1>
            </div>
            
           
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/55 p-8 rounded-md border border-gray-800 w-full max-w-[600px]">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            
            <form className="space-y-6">
              <div className="flex flex-col w-full gap-3 ">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className='group relative px-8 py-3 w-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-500 ease-out overflow-hidden cursor-pointer'>
                <span className='relative z-10'>Send Message</span>
                <div className='absolute inset-0 bg-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out'></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Contact