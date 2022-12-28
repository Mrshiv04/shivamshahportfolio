import React from 'react';
import { motion } from 'framer-motion';
import shivamImg from '../public/shivamshahcover.jpg';

type Props = {};

function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-5xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				className='-mb-20 md:mb-0 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[300px]'
				src={shivamImg.src}
			/>

			<div className='space-y-5 px-0 md:px-10 mt-10'>
				<h4>
					Here's a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
					background
				</h4>
				<p className='text-base'>
					I’m Shivam a maker with an education in engineering in Computer
					Science & Engineering and a passion for experimenting, learning new
					skills and building cool things. An energetic and hardworking
					professional having knowledge of JavaScript, ReactJs, Typescript,
					HTML, CSS, MySQL and Redux with experience of 5 years and want to work
					in a challenging environment, open to learning new skills and using
					new systems involved in mentioned area. I have extremely good problem
					solving skills and good knowledge of OOPs concept. I can take a bullet
					for a plate of Chicken Biryani!
				</p>
			</div>
		</motion.div>
	);
}

export default About;
