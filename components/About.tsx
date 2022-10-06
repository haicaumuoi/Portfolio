import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="rounded-full -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 mt-20 xl:mt-40 object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        viewport={{ once: true }}
      />

      <div className="space-y-6 px-0 md:px-10 lg:w-1/2">
        <h4 className="text-2xl xl:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little </span>{' '}
          background
        </h4>
        <p>{pageInfo?.backgroundInfomation}</p>
      </div>
    </motion.div>
  );
}

export default About;
