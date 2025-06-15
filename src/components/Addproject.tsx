"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

interface FormData {
  projectName: string
  projectDescription: string
  linkedinUrl: string
  githubUrl: string
  liveLink: string
  projectImage: File | null
}

interface ApiResponse {
  success: boolean
  message: string
  data?: any
}

function Addproject() {
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    projectDescription: '',
    linkedinUrl: '',
    githubUrl: '',
    liveLink: '',
    projectImage: null
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        projectImage: file
      }))
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>): void => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (): void => {
    setFormData(prev => ({
      ...prev,
      projectImage: null
    }))
    setImagePreview(null)
    // Reset file input
    const imageInput = document.getElementById('imageInput') as HTMLInputElement
    if (imageInput) {
      imageInput.value = ''
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append('projectName', formData.projectName)
      submitData.append('projectDescription', formData.projectDescription)
      submitData.append('linkedinUrl', formData.linkedinUrl)
      submitData.append('githubUrl', formData.githubUrl)
      submitData.append('liveLink', formData.liveLink)
      
      if (formData.projectImage) {
        submitData.append('projectImage', formData.projectImage)
      }

      // Replace this with your actual API endpoint
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: submitData
      })

      if (response.ok) {
        const result: ApiResponse = await response.json()
        console.log('Project added successfully:', result)
        
        // Reset form
        setFormData({
          projectName: '',
          projectDescription: '',
          linkedinUrl: '',
          githubUrl: '',
          liveLink: '',
          projectImage: null
        })
        setImagePreview(null)
        const imageInput = document.getElementById('imageInput') as HTMLInputElement
        if (imageInput) {
          imageInput.value = ''
        }
        
        alert('Project added successfully!')
      } else {
        throw new Error('Failed to add project')
      }
    } catch (error) {
      console.error('Error adding project:', error)
      alert('Error adding project. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <MaxWidthWrapper>
        <div>
            <div className="py-16 min-h-[100vh] flex flex-col justify-evenly">
                <div className="flex items-center my-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent to-gray-600 relative">
                        <span className="absolute -top-3 -right-4 text-white">•</span>
                    </div>
                    <h1 className="text-3xl w-1/2 text-white text-center font-bold">
                        Add Project
                    </h1>
                    <div className="w-full h-px bg-gradient-to-l from-transparent to-gray-600 relative">
                        <span className="absolute -top-3 -left-4 text-white">•</span>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="bg-gray-900/55 p-8 rounded-md border border-gray-800 w-full max-w-[600px] mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                    <div className="space-y-6">
                        <input 
                            type="text" 
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleInputChange}
                            placeholder="Project Name" 
                            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                            required
                        />
                        
                        <textarea 
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            placeholder="Project Description" 
                            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white placeholder-gray-400 h-[150px] focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                            required
                        />
                        
                        {/* Image Upload Section */}
                        <div className="space-y-3">
                            <label className="block text-white font-medium mb-2">Project Image</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="imageInput"
                                    className="w-full p-6 bg-gray-800 rounded-md border-2 border-dashed border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer flex flex-col items-center justify-center"
                                >
                                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span>Click to upload project image</span>
                                    <span className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</span>
                                </label>
                            </div>
                            
                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="relative">
                                    <img
                                        src={imagePreview}
                                        alt="Project preview"
                                        className="w-full h-48 object-cover rounded-md border border-gray-700"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <input 
                            type="url" 
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleInputChange}
                            placeholder="LinkedIn URL" 
                            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                        />
                        
                        <input 
                            type="url" 
                            name="githubUrl"
                            value={formData.githubUrl}
                            onChange={handleInputChange}
                            placeholder="GitHub URL" 
                            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                        />
                        
                        <input 
                            type="url" 
                            name="liveLink"
                            value={formData.liveLink}
                            onChange={handleInputChange}
                            placeholder="Live Link" 
                            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors" 
                        />
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-400 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Adding Project...
                                </>
                            ) : (
                                'Add Project'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Addproject