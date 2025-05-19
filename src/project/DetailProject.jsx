import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { project } from '../data/data';
import { motion } from 'framer-motion'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";

export default function DetailProject() {
    const {id} = useParams();
    const navigate = useNavigate();
    const pro = project.find((pro) => pro.id === id);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
        <div className='cursor-pointer text-gray-500 flex gap-3 items-center hover:gap-4 transition-all duration-300' onClick={() => navigate(-1)}>
            <IoArrowBackCircleOutline size={30} />
            <span className='font-semibold '>Back</span>
        </div>
        <h1 className="text-2xl font-semibold mt-7">{pro.nama}</h1>
        <p className="mt-3 mb-6 text-md">{pro.desc}</p>
        <hr className="w-full border-1 border-dashed"></hr>

        <div className='flex mt-5 justify-between mb-10'>
          <div className='flex gap-3 items-center mt-3'>
            Tech Stack: {pro.techStack.map((tec, index) => (
              <img src={tec} alt="" className='w-7 h-7 ' key={index}/>
            ))}
          </div>

          <div className={`${pro.demo ? "block" : "hidden"} `}>
            <a href={pro.demo} className='flex gap-4 items-center'>
              <FaArrowUpRightFromSquare size={20}/>
              <p> Live Demo</p>
              
            </a>
          </div>
        </div>
        <img src={pro.img} className='hover:scale-105 transition-all duration-300' alt='' />

        <h2 className={`text-xl font-semibold my-7 ${pro.intro ? 'block' : 'hidden'}`}>Introduction</h2>
        <p className='mb-5'>{pro.intro}</p>
        <div className={`text-xl font-semibold my-7 flex ${pro.intro ? 'block' : 'hidden'}`}>
          <FcIdea size={25}/>
          <h2 className=''>Portofolio</h2>
        </div>
          <p className='mb-5'>{pro.intro}</p>

    </motion.div>
  )
}
