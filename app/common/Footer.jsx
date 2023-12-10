import Image from 'next/image'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
const Footer = () => {
    return (
    <footer className=" py-[40px">
        <div className="bg-[#0063A4] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[66px] md:gap-[50px] gap-[35px] lg:px-[86px] md:px-[70px] px-[30px] py-[89px]"> 
            <div className="flex flex-col gap-5 items-center">
                <Image src="/logo/logo.png" width={347} height={107} alt="logo" />
                <p className='text-white text-xl leading-[160%]'>Is an ed-tech platform that trains
                    kids and teenagers in programming and other tech skills </p>
            </div>   

            <div className='flex flex-col text-white leading-[217%] text-[20px]'>
                <h2 className='text-[24px] font-bold mb-2'>Quick Links</h2>
                <Link href="/">About StackJunior</Link>
                <Link href="/">Courses</Link>
                <Link href="/">Career</Link>
                <Link href="/">FAQs</Link>
                <Link href="/">Private Policy</Link>
                <Link href="/">Send Feedback</Link>
                <Link href="/">Partnersheep</Link>
            </div>           
            <div className='text-white  flex flex-col gap-4 cursor-pointer'>
            <h2 className='text-[24px] font-bold mb-2 hover:text-gray-400'>Socials</h2>
                <div className='text-[35px] gap-[28px] flex '>
                    <IoLogoFacebook className="hover:text-gray-400"/>
                    <IoLogoTwitter className="hover:text-gray-400"/>
                    <IoLogoInstagram className="hover:text-gray-400"/>
                    <IoLogoYoutube className="hover:text-gray-400"/>
                </div>
            <h2 className='text-[20px] font-medium mb-2 hover:text-gray-400'>Contact Us</h2>
            <h2 className='text-[20px] hover:text-gray-400'>+8801998311602</h2>
            <h2 className='text-[20px] hover:text-gray-400'>+8801751942893</h2>
            </div>           
        </div>

        <div className="bg-[#00426d] text-white text-center">  
            <p className="py-[28px] text-2xl font-bold">&copy;2023 StackJunior. All right reserved </p>          
        </div>
    </footer>
    );
};

export default Footer;