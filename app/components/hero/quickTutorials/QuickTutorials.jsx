import React from "react";
import Image from "next/image";
const QuickTutorials = () => {
  return (
    <div className="bg-[#00A17F] text-[#fff] lg:h-[831px] relative">
      <h2 className="text-[36px] font-bold text-center lg:pt-[100px] md:pt-[50px] pt-[35px]">
        QUICK TUTORIALS
      </h2>
      <p className="text-center lg:max-w-[60%] max-w-[80%] mx-auto mt-[22px] lg:mb-[58px] mb-[30px]">
        <span className="font-bold">At StackJunior,</span> acquire <span className="font-bold">industry-relevant tech skills</span> such as
        programming, software development, data science, cloud computing and
        more to <span className="font-bold">become a world-class IT professional.</span>
      </p>
      <div className="lg:mb-0 mb-[30px] lg:mt-0 mt-[40px] flex max-w-[1119px] max-h-[612px] bg-[white] lg:absolute lg:bottom-[-30%] lg:left-[15%] mx-auto rounded-tl-[44px] rounded-tr-[44px]">
        <Image src="/choose/tutorial1.png" width={965} height={661} alt="quickTutorials" className="mx-auto" />
      </div>
    </div>
  );
};

export default QuickTutorials;
