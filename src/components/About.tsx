"use client"
import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { DotIcon } from "lucide-react";
import Skill from "./Skill";
import { motion, useInView } from "framer-motion";


function About() {
   const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
      drag
      id="about"
      className="flex justify-center flex-col pt-8">
        {/* Header Section */}
        <div className="w-full">
          <div className="flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent to-gray-600 relative">
              <DotIcon className="absolute -top-3 -right-4 text-white" />
            </div>
            <h1 className="text-xl md:text-3xl w-full text-white text-center font-bold">
              About me
            </h1>
            <div className="w-full h-px bg-gradient-to-l from-transparent to-gray-600 relative">
              <DotIcon className="absolute -top-3 -left-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 text-white mb-4 mt-2 min-h-[50vh]">
          <motion.div 
          ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ?{ opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 ,ease: "easeInOut"}}
          className="w-full max-w-[700px] ">
            <h1 className="font-semibold text-2xl">Hi there I'm Amansai</h1>
            <p className="text-[13px] my-3">
              I’m a dedicated full stack developer with a strong command over
              building modern, end-to-end web applications. I work confidently
              across the stack—from crafting seamless user experiences with
              React and Next.js, to developing robust backend systems with
              Node.js, Express, and databases like PostgreSQL and MongoDB. I’m
              experienced in designing scalable architectures using REST APIs,
              microservices, and message brokers like RabbitMQ and Kafka. I
              specialize in building real-time features with WebSockets,
              managing complex application state with Recoil, Context API, and
              TanStack Query, and creating clean, responsive UIs using Tailwind
              CSS and modern component libraries.
              <br />
              <br />
              Beyond just writing code, I have a strong focus on system
              design—from designing scalable database schemas to building
              fault-tolerant, distributed systems. I actively sharpen my skills
              in data structures, algorithms, and machine learning, aiming to
              develop intelligent, scalable, and production-ready software that
              solves real-world problems.
            </p>
            <div className="flex gap-1 items-center mx-auto mt-3">
              <button className="group relative cursor-pointer px-4 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 ease-out overflow-hidden">
                <span className="relative z-10">My Resume</span>
                <div className="absolute inset-0 bg-gray-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </button>
            
            </div>
          </motion.div>
          <motion.div 
          ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ?{ opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 ,ease: "easeInOut"}}
          className="w-full flex-col flex gap-2">
            {data?.map((sk, idx) => (
              <Skill title={sk.title} percentage={sk.percentage} key={idx} />
            ))}
            <button className="group relative px-2 py-2 max-w-[170px] mt-4 border border-gray-500 text-white font-medium hover:border-white transition-all duration-300 ease-out overflow-hidden cursor-pointer">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                View all skills
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
}

export default About;
