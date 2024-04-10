import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import About from "./About";

const Hero = () => {
  return (
    <div className={` w-full mb-[300px] `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Aman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Websites and <br className='sm:block hidden' />
            Mobile applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
