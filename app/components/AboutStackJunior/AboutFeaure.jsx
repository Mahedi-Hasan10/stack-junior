import React from 'react';
import FeatureCard from '../hero/features/FeatureCard'
const tutorial1 = '/features/tutorial1.png';
const tutorial2 = '/features/tutorial2.png';
const tutorial3 = '/features/tutorial3.png';
const tutorial4 = '/features/tutorial4.png';
const AboutFeaure = () => {
    return (
        <section className='min-h-[100vh] rounded-tl-[40px] rounded-tr-[40px] lg:mt-[-30px] lg:px-[104px] px-[40px] pb-[100px] bg-[#fcba4d]'>
        <h2 className='text-[36px] text-[#2b2b2b] py-4 font-bold mb-3 ml-2 text-center'>Feature Included</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[107px] gap-[30px]'>
        <FeatureCard tutoImage = {tutorial1} tutoTitle="Code Review"
        tutoDetail ="We don&apos;t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding."
        />
        <FeatureCard tutoImage = {tutorial2} tutoTitle="Mentorship"
        tutoDetail="Even without being in a physical class, we make it possible for our students to ask questions and get guidance through our seasoned and qualified mentors."
        />
        <FeatureCard tutoImage = {tutorial3} tutoTitle="Live Coding Editor"
        tutoDetail="Whether at home or on the go, you can still follow your classes and practice with our easy-to-use code editor. It works on both the web and mobile app."
        />
        <FeatureCard tutoImage = {tutorial4} tutoTitle="Community Forum"
        tutoDetail="Just because you are learning online doesn’t mean you have to be all alone. With our discussion forum, you can share your opinions with other students and even make friends."
        />
        </div>
    </section>
    );
};

export default AboutFeaure;