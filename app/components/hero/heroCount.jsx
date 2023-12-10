"use client";
import React, { useEffect, useState } from 'react';

const HeroCount = () => {
    const [courseCount, setCourseCount] = useState(0)
    const [turorCount, setTutorCount] = useState(0)
    const [studentCount, setStudenteCount] = useState(0)
    // useEffect(() => {
    //     if (courseCount < 5000) {
    //         setTimeout(() => {
    //             setCourseCount(courseCount + 1)
    //         }, );
    //     }
    //     if (turorCount < 2000) {
    //         setTimeout(() => {
    //             setTutorCount(turorCount + 1)
    //         }, );
    //     }
    //     if (studentCount < 10000) {
    //         setTimeout(() => {
    //             setStudenteCount(studentCount + 1)
    //         }, );
    //     }

    // }
    // , [courseCount, turorCount, studentCount]);

    return (
        <div className='flex flex-wrap lg:gap-[200px] md:gap-[100px]  py-[30px] gap-[70px] bg-[#FF0B80] items-center justify-center'>
            <div className='flex flex-col text-white'>
                <h2 className='lg:text-[72px] md:text-[60px] text-[50px] font-bold '>{courseCount}+</h2>
                <h5 className='lg:text-2xl md:text-xl text-lg font-bold'>Courses</h5>
            </div>  
            <div className='flex flex-col text-white'>
                <h2 className='lg:text-[72px] md:text-[60px] text-[50px] font-bold '>{turorCount}+</h2>
                <h5 className='lg:text-2xl md:text-xl text-lg font-bold'>Tutors</h5>
            </div>  
            <div className='flex flex-col text-white'>
                <h2 className='lg:text-[72px] md:text-[60px] text-[50px] font-bold '>{studentCount}+</h2>
                <h5 className='lg:text-2xl md:text-xl text-lg font-bold'>Students</h5>
            </div>  
        </div>
    );
};

export default HeroCount;