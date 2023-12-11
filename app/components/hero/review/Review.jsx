import Image from 'next/image';
import { Carousel } from 'antd';
const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: '700px',
  padding: '24px',

};

const Review = () => {
    return (
        <section className="bg-[#E10C72] pt-[93px] lg:px-[104px] px-[40px]">
            <h2 className="lg:text-4xl text-2xl font-bold text-center text-white">What People Are Saying</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[78px]">
                <div>
                    <Image src="/review/review.png" alt="review1" width={363} height={318} />
                </div>
                <div className='lg:py-[116px] py-[20px]'>
                <Carousel autoplay dotPosition="bottom">
                    <div style={contentStyle} className='max-w-[565px] text-white lg:text-[24px] text-[20px] font-bold py-[30px]'>
                        <p> I took the python course using the mobile app and I found the videos encouraging and helpful.</p>
                        <h5 className='mt-3'>-Donald Trump</h5>
                    </div>
                    <div style={contentStyle} className='max-w-[565px] text-white lg:text-[24px] text-[20px] font-bold '>
                        <p> I took the python course using the mobile app and I found the videos encouraging and helpful.</p>
                        <h5 className='mt-3'>-Kuddus Boyati</h5>
                    </div>
                    <div style={contentStyle} className='max-w-[565px] text-white lg:text-[24px] text-[20px] font-bold '>
                        <p> I took the python course using the mobile app and I found the videos encouraging and helpful.</p>
                        <h5 className='mt-3'>-Vladimir Putin</h5>
                    </div>
                   
                
                </Carousel>

                </div>
            </div>
        </section>
    );
};

export default Review;