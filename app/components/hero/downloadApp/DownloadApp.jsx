import React from "react";
import Image from "next/image";
const DownloadApp = () => {
  return (
    <section className="bg-[#FCBA4D] pt-[30px] lg:px-[104px] px-[40px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
        <div className="flex items-end">
          <Image
            src="/downloadapp/app1.png"
            width={401}
            height={352}
            alt="Download App"
          />
        </div>
        <div className="flex flex-col max-w-[625px]">
          <h2 className="lg:text-[40px] text-[35] font-bold">
            Download StackJunior App
          </h2>
          <p className="lg:text-[24px] text-xl p-2">
            Whether at home or on the go, StackJunior wants you to keep
            learning. Hence, the StackJunior app.
          </p>
          <Image
            src="/downloadapp/app2.png"
            width={334}
            height={129}
            alt="Download App"
          />
        </div>
        <div className="flex items-end">
          <Image
            src="/downloadapp/app3.png"
            width={401}
            height={352}
            alt="Download App"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
