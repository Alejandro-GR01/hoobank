import { useRef } from "react"
import { apple, bill, google } from "../assets"
import styles,  { layout } from "../style"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const Billing = () => {

  const billinRef = useRef()
  const payRef = useRef()
  const bg1Ref = useRef() 
  const bg2Ref = useRef() 
  const textContainerRef = useRef()
  const storeContrainerRef = useRef()

  useGSAP(()=> {
     const timeline2 = gsap.timeline({
         scrollTrigger: {
          trigger: billinRef.current,
          start: "top 70%"
        }
      })

      timeline2.from(bg1Ref.current, {
        opacity: 0,
        x: 1800,
        y: -200,
        width: 0,
        height: 0 ,
        duration: 1,
        ease: 'power2.out',
        
        
      })
      .from(bg2Ref.current, {
        opacity: 0,
        x: 1800,
        y: 400,
        width: 0,
        height: 0 ,
        duration: 1,
        ease: 'power2.out',
       
      }, '-=0.7')
      .from(payRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power2.out',

      }, '-=0.6')
      .from(textContainerRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease : 'power2.out'
      }, '-=0.5')
      .from(storeContrainerRef.current.children, {
        opacity: 0,
        x: 100,
        duration: 1,
        stagger: 0.2,
        ease : 'power2.out'
      }, '-=0.5')
     
  }, {scope: billinRef})




  return (
    <section id="product" className={`${layout.sectionReverse} mb-6 md:mb-12`} ref={billinRef}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] max-h-[100%] relative z-[5]" ref={payRef}/>
    
          <div ref={bg1Ref} className="absolute z-[4] top-0 -left-1/4  w-[60%] h-[60%] md:w-[70%] md:h-[70%] xl:w-[80%] xl:h-[80%] opacity-50 rounded-full white__gradient"></div>
          <div ref={bg2Ref} className="absolute z-[0] bottom-0 -left-1/4   w-[60%] h-[60%] md:w-[70%] md:h-[70%]  xl:w-[80%] xl:h-[80%] opacity-50  rounded-full pink__gradient"></div>

  
      </div>

      <div className={layout.sectionInfo} ref={textContainerRef}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing. </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet consequuntur adipisci soluta et nemo quam a ipsum, iure quae exercitationem, quaerat harum possimus ducimus suscipit cum est vel odio.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6" ref={storeContrainerRef}>
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "/>
          <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain  cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Billing