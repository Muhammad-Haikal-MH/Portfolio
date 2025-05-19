import React from 'react'
import telyu from '../assets/logo-telyu.png'
import sma from '../assets/sma5.png'
import { motion } from 'framer-motion'
import { RiGraduationCapLine } from "react-icons/ri";

export default function About() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h1 className='text-2xl font-semibold mt-7'>About</h1>
      <p className='mt-3 mb-6' >A short story of me</p>
      <hr className='w-full border-1 border-dashed'></hr>

      <div className='mt-7 leading-8 text-[15px]'>
        <p className='mb-4'>
        Hello and welcome to my personal website! I'm Muhammad Haikal, an active student at Telkom University and a tech enthusiast who is currently focused on frontend development. With a strong passion for becoming a full-stack developer, I actively explore the world of web development — starting from the fundamentals like HTML, CSS, and JavaScript, to modern frameworks such as React. I'm also continuously learning various concepts, tools, and technologies to broaden my knowledge and strengthen my foundation in this field.
        </p>

        <p className='mb-4'>
        I enjoy building clean, responsive, and interactive user interfaces. I dive deep into essential concepts such as component-based architecture, state management with hooks, as well as React Router and Redux to create modern and efficient web applications.
        </p>

        <p className='mb-4'>
        I believe that progress comes from consistency, hands-on practice, and openness to feedback. Through personal and collaborative projects, I continue to improve both my technical skills and soft skills like teamwork, communication, and adaptability. For me, building meaningful digital solutions is not just about writing code — it’s about creating valuable experiences for users.
        </p>

        <p className='mb-4'>
        Thank you for visiting. I'm always open to connect and collaborate!
        </p>
        <hr className='mt-7'/>
      </div>

      <div className='flex gap-3 mt-10'>
        <RiGraduationCapLine size={30} />
        <span className='text-xl font-semibold'>Education</span>
      </div>

      <div className='border border-neutral-300 rounded-xl p-1 mt-7'>
          <div className='bg-gradient-to-b from-neutral-200 to-neutral-100 p-5 rounded-xl dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex items-center gap-6'>
            <div className=''>
              <img src={telyu} alt="" className=' w-20 object-cover' />
            </div>

            <div className='mt-1'>
              <span className='text-lg'>Telkom University</span>

              <div className='my-2 text-neutral-600 dark:text-neutral-400 text-sm'>
                <p className='mb-2'> Bachelor of Applied Science</p>
                <p>Smart City Information System, (S.Tr Kom)</p>
                <p className='mt-2'>2024 - Now</p>
                <p className='mt-2'>Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
      </div>

      <div className='border border-neutral-300 rounded-xl p-1 my-7'>
          <div className='bg-gradient-to-b from-neutral-200 to-neutral-100 p-5 rounded-xl dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 flex items-center gap-6'>
            <div className=''>
              <img src={sma} alt="" className=' w-20 object-cover' />
            </div>

            <div className='mt-1'>
              <span className='text-lg'>SMA Negeri 5 Jambi</span>

              <div className='my-2 text-neutral-600 dark:text-neutral-400 text-sm'>
                <p className='mb-2'>Senior High School</p>
                <p>Social Sciences and Humanities</p>
                <p className='mt-2'>2021 - 2024</p>
                <p className='mt-2'>Jambi, Indonesia</p>
              </div>
            </div>
          </div>
      </div>


    </motion.div>
  )
}
