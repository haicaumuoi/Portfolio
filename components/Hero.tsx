import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import { fetchSkills } from '../utils/fetchSkills';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `My name is ${pageInfo?.name}`,
      'I am a Developer',
      'I love to code',
      'Music makes life better',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <motion.img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="avatar"
        className="rounded-full w-32 h-32"
      />
      <div className="z-20 space-y-5">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
