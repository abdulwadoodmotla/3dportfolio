import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { profilePhoto } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[24px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row items-start gap-10 mt-4'>
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className='lg:w-1/4 flex justify-center lg:justify-start'
        >
          <img
            src={profilePhoto}
            alt='Abdul Wadood'
            className='w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-secondary'
          />
        </motion.div>

        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className='lg:w-3/4 text-secondary text-[22px] max-w-full leading-[38px]'
        >
          I'm a distinguished Data Analyst and Machine Learning Engineer with an MSc in Advanced Computer Science 
          from University of Leicester (Distinction) and first-class honours in Computer Science with AI from 
          Coventry University. Currently leading analytics transformations at Mencap, I bring expertise in Python, 
          JavaScript, cloud computing, and advanced ML techniques. My recent achievements include winning hackathons 
          by IBM & Microsoft, developing predictive models with 96% accuracy, and creating scalable data pipelines 
          that drive strategic decision-making. I'm passionate about leveraging cutting-edge AI to solve real-world 
          challenges and deliver measurable business impact.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-12 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
