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
					Here&apos;s a
					<span className='underline decoration-[#F7AB0A]/50'> little </span>
					background
				</h4>
				<p className='text-base'>
					My name is Shivam Shah, I&apos;m a Front End Engineer based in Kolkata
					☀️. I describe myself as a passionate developer who loves coding, open
					source, and the web platform ❤️. Aside from my job, I like to create
					and contribute to open source projects. That helps me to learn a ton
					of new stuff, grow as a developer and support other open source
					projects. Also I enjoy creating websites 💻. In my free time you can
					find me at the gym 🏋️‍♂️ or riding motorcycle 🏍️ around the city.
				</p>
			</div>
		</motion.div>
	);
}

export default About;
