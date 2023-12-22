import React from 'react';
import CourseCard from '../components/courses/CourseCard';

const course1 = '/course/courses1.png';
const course2 = '/course/courses2.png';
const course3 = '/course/courses3.png';
const course4 = '/course/courses4.png';

const Page = () => {
    return (
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
    );
};

export default Page;