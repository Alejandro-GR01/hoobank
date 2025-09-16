import { useRef } from "react"
import { card } from "../assets"
import styles , {layout} from "../style"
import Button from "./Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CardDeal = () =>{

  const cardRef = useRef ()

  useGSAP(()=> {
  

      gsap.from(cardRef.current.children, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.out',
        stagger:0.5,
         scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%"
        }

      })


  }, {scope: cardRef})

  
  return(
    <section className={`${layout.section} mb-6 md:mb-12`} ref={cardRef}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint, ex earum impedit vitae ut aut labore. Nihil quod facere impedit obcaecati inventore nemo temporibus sapiente, voluptate neque?</p>
        
  
        <Button styles={"mt-10"} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] max-h-[100%]"/>

      </div>


    </section>
  )
}


export default CardDeal