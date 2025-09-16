import { useState } from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition duration-75 ease-in hover:scale-105`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div
        className={`${
          styles.flexCenter
        } flex-col  w-[100%] h-[100%] rounded-full ${
          onHover ? "bg-blue-gradient" : "bg-primary backdrop:blur-[220px]"
        } `}
      >
        <div className={` ${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className={`${onHover ? "text-primary" : "text-gradient"}`}>
              Get
            </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
          <span className={`${onHover ? "text-primary" : "text-gradient"}`}>
            Started
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
