import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Project({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-20 sm:top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>

			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
				{projects.map((project, i) => (
					<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{ duration: 1.2 }}
							className='h-40 object-contain'
							src='https://www.passionateinmarketing.com/wp-content/uploads/2022/08/netflix.jpg'
							alt='img'
						/>
						<div className='space-y-10 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								Netflix Clone
							</h4>
							<p className='text-lg text-center md:text-left'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries,
							</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12 ' />
		</motion.div>
	);
}

export default Project;
