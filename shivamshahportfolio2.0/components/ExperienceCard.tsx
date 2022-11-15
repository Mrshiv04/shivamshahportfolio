import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[320px] md:w-[430px] xl:w-[700px] snap-center bg-[#292929] p-10'>
			<motion.img
				initial={{
					opacity: 0,
					y: -100,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				viewport={{ once: true }}
				className='h-23 w-23 rounded-full md:rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
				src='https://st1.bgr.in/wp-content/uploads/2015/10/infosys-logo.jpg'
				alt='image'
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-3xl font-light'>Company Header</h4>
				<p className='font-bold text-xl mt-1'>Company Name</p>
				<div className='flex space-x-1 my-1'>
					<img
						className='h-10 w-10 rounded-full'
						src='https://st1.bgr.in/wp-content/uploads/2015/10/infosys-logo.jpg'
						alt='stackimg'
					/>
					<img
						className='h-10 w-10 rounded-full'
						src='https://st1.bgr.in/wp-content/uploads/2015/10/infosys-logo.jpg'
						alt='stackimg'
					/>
					<img
						className='h-10 w-10 rounded-full'
						src='https://st1.bgr.in/wp-content/uploads/2015/10/infosys-logo.jpg'
						alt='stackimg'
					/>
				</div>
				<p className='uppercase py-2 text-gray-300'>started... - Ended...</p>
				<ul className='list-disc ml-5 text-md'>
					<li>
						test test test test test test test test test test test test test
						test test
					</li>
					<li>
						test test test test test test test test test test test test test
						test test
					</li>
					<li>
						test test test test test test test test test test test test test
						test test
					</li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
