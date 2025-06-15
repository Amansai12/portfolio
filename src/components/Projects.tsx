"use client"
import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProjectCard from "./ProjectCard";
import { DotIcon } from "lucide-react";
import { useInView, motion } from "framer-motion";


function Projects() {
  const data = [
    {title:"Collaboration platform",
      description:"A platform for team collaboration and project management",
      image:"/collab.png",liveLink:"https://collab-docs-frontend-fur2.vercel.app/",
      githubLink:"",
      LinkedinLink:""},
    {title:"Digital Civic Engagement Platform",
      description:"A platform to connect citizens with local government services and initiatives",
      image:"/civic.png",liveLink:"https://civic-wine.vercel.app",
      githubLink:"",
      LinkedinLink:""},
    {title:"Hostel Management System",
      description:"A web application for managing hostel operations and student information",
      image:"/hms.png",liveLink:"https://hms-frontend-ashen.vercel.app",
      githubLink:"",
      LinkedinLink:""},
    ];
  const ref = useRef(null)
    const isInView = useInView(ref,{once:false})
  return (
    <MaxWidthWrapper>
      <div id="projects" className="py-4">
        <div className="flex items-center my-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent to-gray-600 relative">
                      <DotIcon className="absolute -top-3 -right-4 text-white" />
                    </div>
                    <h1 className="text-xl md:text-3xl w-full text-white text-center font-bold">
                      Projects
                    </h1>
                    <div className="w-full h-px bg-gradient-to-l from-transparent to-gray-600 relative">
                      <DotIcon className="absolute -top-3 -left-4 text-white" />
                    </div>
                  </div>
        <motion.div 
        ref={ref}
    initial={{opacity:0,y:80}}
    animate={isInView?{opacity:1,y:0}:{}}
    transition={{duration:1}}
        className="flex flex-wrap gap-8 justify-center items-center my-14">
          {data?.map((pro, idx) => (
            <ProjectCard key={idx} title={pro.title} description={pro.description} image={pro.image} linkedinLink={pro.LinkedinLink} liveLink={pro.liveLink} githubLink={pro.githubLink} />
          ))}
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Projects;
