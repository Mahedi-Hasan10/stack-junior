import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import Image from 'next/image'
import Link from 'next/link'

const CourseCard = ({courseImage, courseTitle}) => {
    return (
        <div className='bg-white   max-w-[518px]'>
            <div className='text-2xl font-bold'>
            <Image src={courseImage} width={500} height={350} alt="courses" className='lg:h-[302px]'/>
            <h3 className='text-center py-5 text-[#2b2b2b]'>{courseTitle}</h3>
            </div>
           
        </div>
    );
};

export default CourseCard;