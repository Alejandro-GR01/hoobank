import styles from "./style";

import {
  Billing,
  Busines,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedBcakCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      <div className={` ${styles.flexCenter} relative z-20`}>
        <div className={`${styles.boxWidth} px-6 md:px-12`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} relative z-10`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} px-6 md:px-12  `}>
          <Stats />
          <Busines />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
