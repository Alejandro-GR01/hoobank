import { useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Stats = () => {
  const statsRef = useRef(null);
  // const itemsRef = useRef(null)

  useGSAP(
    () => {
      document.addEventListener("DOMContentLoaded", () => {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          x: 1000,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        });
      });
    },
    { scope: statsRef }
  );

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 md:mb-12`}
      ref={statsRef}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3 ml-0`}
        >
          <h2 className="font-popins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h2>
          <p
            className={`font-popins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient  uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
