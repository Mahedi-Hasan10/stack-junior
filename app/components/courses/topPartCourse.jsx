"use client";

import React from 'react';
import { IoSearch } from 'react-icons/io5';
import Image from 'next/image'
import CourseCard from '../courses/CourseCard'

const course1 = '/course/courses1.png';
const course2 = '/course/courses2.png';
const course3 = '/course/courses3.png';
const course4 = '/course/courses4.png';


const TopPartCourse = () => {

    return (
        <div className='bg-[#FEEFDC] '>
           <div className='mx-auto text-center lg:pt-[170px] md:pt-[120px] pt-[60px] lg:px-[104px] px-[40px]'>
                <h2 className='lg:text-[64px] md:text-[40px] text-[30px] text-[#2C2C2C] font-bold'> <span className='text-[#0063A4]'>Search</span> for your desired <span className='text-[#FF0B80]'>courses</span></h2>
               <div className='flex items-center justify-center gap-[15px]'>
               <input type="search" placeholder='what are you looking for ?' className=' mt-[10px] lg:w-[870px] lg:h-[63px] shadow-sm lg:px-[40px] md:px-[30px] px-[10px] py-[10px]'/> <button className="lg:w-[95px] lg:h-[63px] py-[10px] px-[10px] rounded-md bg-[#FF0B80] lg:text-[40px] text-[23px] flex items-center justify-center text-white"><IoSearch/></button>
               </div>
                <Image className='mx-auto' src="/choose/courses1.png" width={980} height={598} alt="courses banner"/>
            </div> 
        <section className='min-h-[100vh] rounded-tl-[40px] rounded-tr-[40px] lg:mt-[-30px] lg:px-[104px] px-[40px] pb-[100px] bg-[#fcba4d]'>
        <h2 className='lg:text-[48px] md:text-[36px] text-[30px] text-[#2b2b2b] pt-16 pb-4 font-bold mb-3 ml-2 text-center '>Checkout our courses</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[107px] gap-[30px]'>
       <CourseCard courseImage={course1} courseTitle="Introduciton to programming"/>
       <CourseCard courseImage={course2} courseTitle="Frontend Development"/>
       <CourseCard courseImage={course3} courseTitle="UI / UX Designing"/>
       <CourseCard courseImage={course4} courseTitle="SQL Programming"/>
        </div>

       <div className='flex items-center justify-center lg:pt-[92px] pt-[40px]'>
       <button className='py-[27px] lg:px-[120px] md:px-[70px] px-[40px] bg-black text-white rounded-[83px] mx-auto'>View All Courses</button>
       </div>
    </section>
            
        </div>
    );
};

export default TopPartCourse;