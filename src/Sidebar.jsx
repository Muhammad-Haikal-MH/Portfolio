import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPerson, GoProject } from "react-icons/go";
import { GiAchievement } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsPatchCheckFill } from "react-icons/bs";
import foto from './assets/poto.jpeg'
import { NavLink, useLocation } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { BsCloudSun } from "react-icons/bs";
import { BsCloudMoon } from "react-icons/bs";

export default function Sidebar() {
    let isTab = useMediaQuery({query: "(max-width: 768px)" });
    const {pathname} = useLocation();
    const [isOpen, setIsOpen] = useState(isTab ? false : true);
    // const [mode, setMode] = useState(false);


    // const handleMode = () => {
    //     setMode(!mode);
    // }

    const [mode, setMode] = useState(() => {
        // Menentukan mode berdasarkan localStorage atau preferensi sistem
        if (typeof window !== 'undefined') {
          return localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false; // default ke light mode
      });
    
      // Update tema pada body saat mode berubah
      useEffect(() => {
        if (mode) {
          document.documentElement.classList.add('dark'); // Menambahkan class dark ke <html>
          localStorage.setItem('theme', 'dark'); // Menyimpan tema ke localStorage
        } else {
          document.documentElement.classList.remove('dark'); // Menghapus class dark
          localStorage.setItem('theme', 'light');
        }
      }, [mode]);
    
      // Fungsi toggle mode
      const handleMode = () => {
        setMode(prev => !prev);
      };

    const sidebar_animation = isTab 
    ? //mobile
    {
        open : {
            x:0,
            width : '16rem',
            transition : {
                damping : 40,
                
            }
        },
        closed : {
            x:-250,
            width : 0,
            transition : {
            damping : 40,
            delay: 0.15,
            }
        }

    }:{
        open : {
            width : '16rem',
            transition : {
                damping : 40,
                
            }
        },
        closed : {
            width : '4rem',
            transition : {
                damping : 40,
                
            }
        }
    };

    useEffect(() => {
        if (isTab) {
            setIsOpen(false);
        } else{
            setIsOpen(true);
        }
    },[isTab])

    // pathname close sidebar (cuma mobile)
    useEffect(() => {
        isTab && setIsOpen(false);
    },[pathname])


  return (
    <div>
        <div onClick={() => setIsOpen(false)} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? 'block' : 'hidden'}`}>
            
        </div>
        <motion.div variants={sidebar_animation} initial={{x: isTab ? -250: 0 }} animate={isOpen ? "open" : "closed"} className='dark:bg-[#121212] dark:shadow-neutral-700 bg-white rounded-tr-lg rounded-br-lg text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem]
            h-screen overflow-hidden md:relative fixed'>

            <div className={`${isOpen ? "mx-3 py-12 px-2" : "py-10 px-2"}`}>
                <img src={foto} alt=".." className={`rounded-full object-cover border duration-200 hover:scale-115 ${isOpen ? "h-20 w-20" : "h-12 w-12"}`} />
                <div className={`flex items-center gap-2 mt-4 ${isOpen ? "block" : "hidden"}`}>
                    <span className='text-xl whitespace-pre'>Muhammad Haikal</span>
                    <BsPatchCheckFill size={20} className='text-blue-500 ml-1' />
                </div>

                {/* darkmode */}
                <div className={`flex items-center ${isOpen ? "justify-between" : "justify-center"} mt-7`}>
                    {isOpen && (
                        <div className='p-1.5 border-1 border-gray-300 dark:border-gray-700 rounded-2xl text-sm'><span className='text-green-500 size-6 animate-pulse mr-1'>&bull;</span> hire me.</div>
                    )}
                    <div className="rounded-xl p-2 flex cursor-pointer items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-500 active:bg-gray-400 active:dark:bg-gray-600 active:transition duration-500 " onClick={handleMode}>
                        {mode ? (
                            <BsCloudSun size={20} className='text-gray-200' />
                        ) : (
                            <BsCloudMoon size={20} className='text-gray-800' />
                        )}
                    </div>
                </div>
            </div>

            {/* menu */}
            <div className='flex flex-col h-full'>
                <ul className={`whitespace-pre py-5 flex flex-col gap-3 font-medium overflow-x-hidden ${isOpen ? "px-5" : "px-2.5"}`}>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/" className={'link'}>
                        <HiOutlineHomeModern size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        Home
                        </NavLink>
                    </li>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/about" className={'link'}>
                        <GoPerson size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        About
                        </NavLink>
                    </li>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/dashboard" className={'link'}>
                        <LuLayoutDashboard size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        Dashboard
                        </NavLink>
                    </li>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/Achievement" className={'link'}>
                        <GiAchievement size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        Achievement
                        </NavLink>
                    </li>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/project" className={'link'}>
                        <LuLayoutDashboard size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        Project
                        </NavLink>
                    </li>
                    <li className='group hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded-md hover:scale-110 duration-150'>
                        <NavLink to="/Contact" className={'link'}>
                        <GrContact size={23} className='min-w-max group-hover:-rotate-[25deg] duration-300'/>
                        Contact
                        </NavLink>
                    </li>
                </ul>

                <span className=' border-b mx-5 mt-1' />
                <span className={`mt-5 mx-5 text-sm ${isOpen ? "block" : "hidden"}`}>COPYRIGHT &copy; 2025 <br /> Muhammad Haikal</span>
            </div>


            <motion.div
                animate={isOpen ?
                    {
                        x: 0,
                        y: 0,
                        rotate: 0,
                    }:
                    {
                        x: -10,
                        y: -10,
                        rotate: 180,
                    }
                    } transition={{
                        duration: 0
                    }} onClick={() => setIsOpen(!isOpen)} className='absolute w-fit h-fit z-50 bottom-20 right-2 cursor-pointer'>
                <IoIosArrowBack size={25} />
            </motion.div>
        </motion.div>
        <div className='m-3 md:hidden cursor-pointer' onClick={()=> setIsOpen(true)}>
            <HiMenuAlt1 size={25}/>
        </div>
    </div>
  )
}
