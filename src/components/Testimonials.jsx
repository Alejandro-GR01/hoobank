import { useEffect, useRef, useState } from "react"
import { feedback } from "../constants"
import styles from "../style"
import FeedBcakCard from "./FeedBackCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Testimonials = () => {

  const sectionRef = useRef()
  const gradientRef = useRef()
  const headerRef = useRef()
  const testimonialsRef= useRef()
  const [testimonialVisible, setTestimonialVisible] = useState(false)

  const carouselRef = useRef()
 

  useGSAP(()=> {
    
      document.addEventListener('DOMContentLoaded', ()=> {
        gsap.from(gradientRef.current, {
         x: -2000,
         width: 0,
         height: 0,
         duration: 1,
         scrollTrigger: {
           trigger: sectionRef.current,
           start: "top 40%"
         }
       })
 
       gsap.from(headerRef.current.children, {
         opacity: 0,
         x: 100,
         duration: 1,
         stagger: 0.4,
         scrollTrigger: {
           trigger: headerRef.current,
           start: "top 80%"
         }
       })
 
        gsap.from(testimonialsRef.current, {
         opacity: 0,
         x: 100,
         duration: 1,
         scrollTrigger: {
           trigger: testimonialsRef.current,
           start: "top 80%"
         }
       })
       setTestimonialVisible(true)
      })

    
  
  }, {scope: sectionRef})

    useEffect(() => {
      if(testimonialVisible){

        const carousel = carouselRef.current;
        const content = testimonialsRef.current;
    
        if (!carousel || !content) return;
    
        // Calcular dimensiones
        // const carouselWidth = carousel.offsetWidth;
        const contentWidth = content.offsetWidth;
    
        // Crear clon del contenido para efecto infinito
     
    
        // Animación infinita
        const tl = gsap.timeline({ repeat: -1 });
    
        tl.to(carousel, {
          x: -contentWidth / 2,
          duration: contentWidth / 300, // Velocidad proporcional al contenido 100
          ease: 'none',
          onComplete: () => {
            // Reset suave para efecto infinito
            gsap.set(carousel, { x: 0 });
          
          }
        });
    
        // Pausar animación al hacer hover
        const pauseAnimation = () => tl.pause();
        const resumeAnimation = () => tl.play();
    
    
        content.addEventListener('mouseenter', pauseAnimation);
        content.addEventListener('mouseleave', resumeAnimation);
    
        return () => {
          tl.kill();
          content.removeEventListener('mouseenter', pauseAnimation);
          content.removeEventListener('mouseleave', resumeAnimation);
        };
      }
  }, [testimonialVisible]);



  
  return(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mb-6 md:mb-12
    `} ref={sectionRef}>
      {/* To do */}
      <div ref={gradientRef} className="absolute z-[0] w-[60%] h-[60%] -right-[30%] rounded-full blue__gradient"/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1] " ref={headerRef}>
        <h2 className={styles.heading2}>What people are <br  className="sm:block hidden"/> saying about us</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px] `}>Everithing you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="relative  w-screen max-w-[100vw] h-[480px] " ref={carouselRef}>

      <div className="flex gap-3 sm:gap-5  h-fit justify-start feedback-container absolute z-[1]" ref={testimonialsRef} >
        {[...feedback, ...feedback].map((card, index)=> (
          <FeedBcakCard key={`${card.id}-${index}`} {...card} />
        ))}
      </div>
      </div>

    </section>
  )
}


export default Testimonials