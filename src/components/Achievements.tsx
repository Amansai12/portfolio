"use client"
import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BookMarked, Braces, DotIcon, FolderCheckIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";


function Achievements() {
   const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(()=>{
    if(isInView){
        //alert("You are viewing the About section!");
    }
  },[isInView])
  const data = [
    { title: "React", percentage: 90 },
    { title: "C++", percentage: 90 },
    { title: "NextJs", percentage: 60 },
    { title: "NodeJS", percentage: 90 },
    { title: "PostgreSQL", percentage: 70 },
    { title: "MongoDB", percentage: 60 },
  ];
  return (
    <MaxWidthWrapper>
      <motion.div 
      id="achievements"
      className="flex justify-center flex-col pt-8">
        {/* Header Section */}
        <div className="w-full">
          <div className="flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent to-gray-600 relative">
              <DotIcon className="absolute -top-3 -right-4 text-white" />
            </div>
            <h1 className="text-xl md:text-3xl w-full text-white text-center font-bold">
              Achievements
            </h1>
            <div className="w-full h-px bg-gradient-to-l from-transparent to-gray-600 relative">
              <DotIcon className="absolute -top-3 -left-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 text-white mb-4 mt-2 min-h-[40vh]">
          <motion.div 
          ref={ref}
          drag
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ?{ opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 ,ease: "easeInOut"}}
          className="w-full max-w-[300px] flex flex-col items-center bg-black/55 backdrop-blur-3xl shadow-white">
            <Braces size={50}/>
            <h1 className="font-bold text-xl my-3">900+ DSA Problems</h1>
            <p className="text-center text-sm">Solved over 900+ Data Structures and Algorithms problems across platforms like LeetCode, Codeforces,Geeksforgeeks and Coding Ninjas.</p>
          </motion.div>
          <motion.div 
          ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ?{ opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 ,ease: "easeInOut"}}
          className="w-full max-w-[300px] flex flex-col items-center bg-black/55 backdrop-blur-3xl shadow-white">
            <FolderCheckIcon size={50}/>
            <h1 className="font-bold text-xl my-3">10+ Projects</h1>
            <p className="text-center text-sm">Created a portfolio of 10+ diverse projects ranging from e-commerce, blog platforms, and real-time applications to microservice-based systems.</p>
          </motion.div>
          <motion.div 
          ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ?{ opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 ,ease: "easeInOut"}}
          className="w-full max-w-[300px] flex flex-col items-center bg-black/55 backdrop-blur-3xl shadow-white">
            <BookMarked size={50}/>
            <h1 className="font-bold text-xl my-3">Academic Excellence</h1>
            <p className="text-center text-sm">Achieved a 9.6 CGPA in BTech Computer Science — among the top performers in the batch.</p>
          </motion.div>
          
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
}

export default Achievements;
