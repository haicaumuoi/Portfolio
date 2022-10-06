/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:haianh12122002@gmai.com?subject=${data.subject}&body=${data.message}`;
  };

  return (
    <motion.div
      className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 lg:space-y-8 mt-16 lg:mt-20">
        <h4 className="text-xl lg:text-3xl font-semibold text-center">
          I have got what you need.{' '}
          <span className="underline decoration-[#F7AB0A]/50">Let's talk</span>
        </h4>
        <div className="space-y-4 xl:space-y-6 ">
          <div className="flex items-center justify-center space-x-3 xl:space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#F7AB0A] animate-pulse"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="lg:text-xl">+84921202845</p>
          </div>
          <div className="flex items-center justify-center space-x-3 xl:space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#F7AB0A] animate-pulse"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className="lg:text-xl">haianh12122002@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-3 xl:space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-[#F7AB0A] animate-pulse"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <p className="lg:text-xl">
              Go Vap District, Ho Chi Minh City, Viet Nam
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex lg:space-x-2 flex-col lg:flex-row space-y-2 lg:space-y-0">
              <input
                {...register('name')}
                placeholder="Name"
                className="contact-input"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contact-input"
                type="email"
              />
            </div>
            <input
              {...register('subject')}
              placeholder="Subject"
              className="contact-input"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="contact-input"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
