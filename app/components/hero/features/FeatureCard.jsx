import React from "react";
import Image from "next/image";
const FeatureCard = ({tutoImage,tutoTitle,tutoDetail}) => {
  return (
    <div className="text-center">
      <Image
        src={tutoImage}
        alt="tutorail"
        width={363}
        height={318}
        className="mx-auto"
      />
      <h3 className="text-[28px] font-bold text-[#2b2b2b] mt-2 mb-4 leading-[184%]">
        {tutoTitle}
      </h3>
      <p className="text-[23px] text-[#2b2b2b] leading-[180%] max-w-[532px] mx-auto">
        {tutoDetail}
      </p>
    </div>
  );
};

export default FeatureCard;
