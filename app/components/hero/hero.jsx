import { IoSearch } from "react-icons/io5";
import Image from "next/image"
const Hero = () => {
    const searchIcon = <IoSearch/>
    return (
        <div className="bg-[#0063A4] relative flex flex-wrap  pt-[40px]  lg:px-[86px] px-[50px] lg:pb-0 pb-10">
            <div className=" flex flex-col order-1 gap-3 py-10 z-10 max-w-[506px]">
                <h2 className="text-white lg:text-[64px] ml-5 lg:font-bold md:text-[50px] md:font-semibold text-[40px] font-medium ">Learn on your schedule</h2>
            <div className="flex gap-3 justify-center max-w-[80%] mx-auto pb-[50px]">
                <input type="search" placeholder="Search your desire courses" className=" rounded-md shadow-md lg:py-6 py-4 lg:pl-20 lg:pr-[150px] md:pr-[80px] pr-[10px]"/>
                <button className="rounded-md shadow-md lg:text-[30px] text-white bg-[#FF0B80] lg:py-6 py-4 lg:px-8 px-6 ">
                <IoSearch/>
                </button>
            </div>
            </div>
            <div className="order-last lg:flex absolute bottom-0 right-0 justify-start hidden z-0">
                <Image src="/hero/hero.png" width={1000} height={600} alt="hero-baner"/>
            </div>
        </div>
    );
};

export default Hero;