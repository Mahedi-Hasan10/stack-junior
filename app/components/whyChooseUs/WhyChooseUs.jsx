import React from "react";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <section className="lg:py-[89px] md:py-[70px] py-[40px] lg:px-[86px] px-[50px] flex flex-col lg:gap-[60px] md:gap-[50px] gap-[40px]">
      <h2 className="text-[#2b2b2b] lg:text-[54px] md:text-[40px] text-[30px] lg:font-bold font-semibold text-center ">
        Why Choose Us ?
      </h2>
      <div className="grid lg:grid-cols-2 gap-[65px]">
        <div>
          <Image
            src="/choose/choose1.png"
            width={609}
            height={583}
            alt="whyChooseUs"
          />
        </div>
        <div className="flex flex-col justify-center text-[#2b2b2b]">
          <h3 className="lg:text-[36px] text-[25px] lg:font-bold font-semibold mb-[17px]">
            Detailed Syllabus with Localized Content
          </h3>
          <p className="text-[23px] ">
            We&apos;ve got a comprehensive syllabus that leaves nothing
            untouched and with our localized contents and examples, you are sure
            to grasp programming concepts easier and faster even without prior
            experience (i.e. as a beginner).
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-[65px]">
        <div className="flex flex-col justify-center text-[#2b2b2b]">
          <h3 className="lg:text-[36px] text-[25px] lg:font-bold font-semibold mb-[17px]">
            An Interactive Personalized Learning Experience{" "}
          </h3>
          <p className="text-[23px] ">
            With StackJunior’s flexible learning options and 1-on-1 code review
            with seasoned tutors, your learning is suited just for you.
          </p>
        </div>
        <div>
          <Image
            src="/choose/choose2.png"
            width={609}
            height={583}
            alt="whyChooseUs"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-[65px]">
        <div>
          <Image
            src="/choose/choose3.png"
            width={609}
            height={583}
            alt="whyChooseUs"
          />
        </div>
        <div className="flex flex-col justify-center text-[#2b2b2b]">
          <h3 className="lg:text-[36px] text-[25px] lg:font-bold font-semibold mb-[17px]">
            World-Class Learning with World-Class Jobs
          </h3>
          <p className="text-[23px] ">
            <span className="font-bold">At StackJunior</span>, we impact
            students with industry-standard skills and trainings. We also
            support them in getting jobs that are available from around the
            globe. How cool is that?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
