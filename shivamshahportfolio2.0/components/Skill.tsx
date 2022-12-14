import React, { FC } from 'react';
import { motion } from 'framer-motion';

type Props = {
	directionLeft?: boolean;
};

interface skillProps {
	source: any;
	rating: any;
}

const Skill: FC<skillProps> = ({ source, rating }: skillProps) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					y: 100,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				src={source}
				alt='skills img'
				className='rounded-full  object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>{rating}%</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
