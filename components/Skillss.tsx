import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skills } from '../typing';

type Props = {
  skills: Skills[];
};

function Skillss({ skills }: Props) {
  return (
    <motion.div
      className="flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center relative h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </div>

      <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 absolute top-48">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skillss;
