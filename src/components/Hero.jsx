import React, { useRef } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

import {gsap} from 'gsap'
import { useGSAP } from "@gsap/react";

const Hero = () => {

  const heroRef = useRef(null)
  const textRef = useRef(null)
  const handRef = useRef(null)
  const bgRef = useRef(null)


  useGSAP(()=> {
    gsap.timeline().from(textRef.current, {x: -500, opacity: 0,  duration: 1, delay: 1, ease:'power2.out'})
                  .from(bgRef.current, {
                     opacity: 0,
                    width: 0,
                    height: 0,
                    duration: 2,
                    ease: 'power2.out'
                  },"-=1")
                  .from(bgRef.current, {
                    x: 800,
                    y: 200,
                    duration: 2,
                    ease: 'power2.out'
                  }, "-=2")
                  .from(
                    handRef.current, {x: 800, opacity:0, duration: 2, ease:'power1.out'}, '-=1.6')

  }, [])
  
  return (
  
  <section id="hero" ref={heroRef} className={`flex md:flex-row flex-col ${styles.paddingY} mb-6 md:mb-12`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col  pl-6 md:pl-12 `}
      ref={textRef}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] max-h-[32px]" />
        <p className={`${styles.paragraph} ml-2 font-extralight `}>
          <span className="text-white font-semibold">20%</span> Discount For{" "}
          <span className="text-white font-semibold">1 Month</span> Acount{" "}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading=[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="sm:flex hidden md:mr-4 mr-0 md:ml-4 ml-0 ">
          <GetStarted />
        </div>
      </div>

      <h1 className=" font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading=[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credits cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img ref={handRef} src={robot} alt="billing" className="w-[100%] max-h-[100%] relative z-[5] "/>
      <div ref={bgRef} className="absolute z-[3] w-[100%] h-[100%]">

        <div className="absolute z-[0] w-[50%] h-[45%] top-0 pink__gradient  "></div>
        <div className="absolute z-[1] w-[85%] h-[85%] rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-[2] w-[60%] h-[60%] right-20 bottom-20 blue__gradient "></div>
      </div>
    </div>

    <div className={`sm:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>


  </section>
);

}

export default Hero;
