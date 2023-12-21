import React from 'react';
import Image from 'next/image'
import { IoSearch } from 'react-icons/io5';
const AboutHero = () => {
    return (
        <div className='bg-[#d2e5f2] grid lg:grid-cols-2 grid-cols-1 lg:px-[104px] px-[40px] py-8'>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='lg:text-[64px] md:text-[50px] text-[40px] font-bold text-[#2c2c2c]'>About <span className='text-[#ff0b80]'>Stack</span><span className='text-[#0063A4]'>Junior</span></h2>
                <p className='text-[23px] text-[#2c2c2c]'>Is an ed-tech platform that trains kids and teenagers in programming and other tech skills so as to prepare them for the opportunities of the future</p>
                <button className='text-[29px] font-bold text-white bg-[#ff0b80] flex items-center justify-center gap-3 max-w-50% px-4 py-2 mx-auto rounded-md'><IoSearch/>Explore</button>
            </div>
            <div className=']'>
                <Image src="/about/aboutus1.png" width={797} height={797} alt="about us"/>
            </div>
        </div>
    );
};

export default AboutHero;