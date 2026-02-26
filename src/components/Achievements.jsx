import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, description, icon, color }) => (
  <Tilt className='xs:w-[280px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-8 px-6 min-h-[320px] flex justify-evenly items-center flex-col'
      >
        <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center mb-4`}>
          <div className="text-4xl">{icon}</div>
        </div>

        <h3 className='text-white text-[22px] font-bold text-center mb-3'>
          {title}
        </h3>
        
        <p className='text-secondary text-[16px] text-center leading-relaxed'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & Success</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[22px] max-w-full leading-[38px]'
      >
        My journey in technology and data science has been marked by significant milestones, 
        from academic excellence to competitive hackathon victories and professional recognition. 
        These achievements reflect my commitment to continuous learning and innovation in the field.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-12 justify-center'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
