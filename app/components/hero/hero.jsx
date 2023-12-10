import { IoSearch } from "react-icons/io5";
import Image from "next/image"
const Hero = () => {
    const searchIcon = <IoSearch/>
    return (
        <div className="bg-[#0063A4] grid lg:grid-cols-2 grid-cols-1 lg:pt-[80px] pt-[40px]  lg:px-[86px] px-[50px] lg:pb-0 pb-10">
            <div className=" flex flex-col order-1 gap-3 ">
                <h2 className="text-white lg:text-[64px] ml-5 lg:font-bold md:text-[50px] md:font-semibold text-[40px] font-medium ">Learn on your schedule</h2>
            <div className="flex gap-3 justify-center max-w-[80%] mx-auto pb-[50px]">
                <input type="search" placeholder="Search your desire courses" className=" rounded-md shadow-md lg:py-6 py-4 lg:pl-20 lg:pr-[150px] md:pr-[80px] pr-[10px]"/>
                <button className="rounded-md shadow-md lg:text-[30px] text-white bg-[#FF0B80] lg:py-6 py-4 lg:px-8 px-6 ">
                <IoSearch/>
                </button>
            </div>
            </div>
            <div className="order-last lg:flex hidden">
                <Image src="/hero/hero.png" width={1190} height={660} alt="hero-baner" />
            </div>
        </div>
    );
};

export default Hero;