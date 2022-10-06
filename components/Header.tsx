import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typing';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            bgColor="transparent"
            fgColor="gray"
            target={'_blank'}
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ opacity: 0, x: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.25 }}
          className="flex flex-row items-center cursor-pointer text-gray-300"
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            bgColor="transparent"
            fgColor="gray"
            target={'_blank'}
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch{' '}
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
