import { useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeatureCard = ({ icon, title, content, index ,addItems }) =>  (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
    ref={addItems}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h3 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white">
        {title}
      </h3>
      <p className="font-poppins font-normal text-[16px] leading-[24px] mb-1 text-white opacity-70">{content}</p>
    </div>
  </div>
);

const Busines = () => {
  
    const containerRef = useRef()
    const blockTextRef = useRef()
  
    const itemsRef = useRef([])

  
    useGSAP(()=> {
      const timeline1 = gsap.timeline({
         scrollTrigger: {
          trigger: blockTextRef.current,
          start: "top 78%"
        }
      })

      timeline1.from(blockTextRef.current , {
        opacity: 0 ,
        x: -1000,
        duration: 1,
         ease: 'power2.out',
       
      })
      .from(itemsRef.current, {
        opacity: 0 ,
        x: -100,
        duration: 1,
        stagger: 0.3,
         ease: 'power2.out',
       
    }, '-=0.5')
    }, [])

    const addItems = (item) => {
      if(item && !itemsRef.current.includes(item)) {
        itemsRef.current.push(item)
      }
    }

  return (
    <section id="features" className={`${layout.section} mb-6 md:mb-12`} ref={containerRef}>
      <div className={layout.sectionInfo} ref={blockTextRef}>
        <h2 className={styles.heading2}>
          You do the busines, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the rights credits card, you can improve your financial life by
          building credits, earning rewards and saving money. But with hundreds
          of credits card on the market.
        </p>

        <Button styles="mt-10 " />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} addItems={addItems} />
        ))}
      </div>
    </section>
  );
};

export default Busines;
