import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../typing';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      className="flex flex-col text-left overflow-hidden md:flex-row  max-w-full justify-evenly  mx-auto items-center relative z-0 h-screen  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 xl:mt-24 mt-8">
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <a
            href={project.linkToBuild}
            target={'_blank'}
            rel="noreferrer"
            key={project._id}
          >
            <motion.div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 xl:space-y-10 justify-center p-20 md:p-44 h-screen items-center ">
              <motion.img
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                src={urlFor(project?.image).url()}
                alt="avt"
                className="w-60 h-60 text-center"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project?.name}
                  </span>
                </h4>

                <div className="flex items-center space-x-8 justify-center">
                  {project?.technologies.map((tech) => (
                    <motion.img
                      className="h-10 w-10"
                      key={tech._id}
                      src={urlFor(tech?.image).url()}
                      alt="tech"
                    />
                  ))}
                </div>
              </div>
              <p className="xl:w-2/3">{project?.summary}</p>
            </motion.div>
          </a>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[320px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
