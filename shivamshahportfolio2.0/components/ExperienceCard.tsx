import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface IProps {
	companyLogo: any;
	companyHeader: any;
	companyName: any;
	skills: any;
	started: any;
	ended: any;
	projects: any;
}

const ExperienceCard: FC<IProps> = ({
	companyLogo,
	companyHeader,
	companyName,
	skills,
	started,
	ended,
	projects,
}: IProps) => {
	// console.log('========> ', skills);
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
				className='h-10 w-10 rounded-full md:rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
				src={companyLogo}
				alt='image'
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-3xl font-light'>{companyHeader}</h4>
				<p className='font-bold text-xl mt-1'>{companyName}</p>
				<div className='flex space-x-1 my-1'>
					{skills.map((element: any, index: any) => {
						return (
							<span key={index}>
								<img
									className='h-7 w-7 rounded-full mx-1'
									src={element}
									alt='stackimg'
								/>
							</span>
						);
					})}
				</div>
				<p className='uppercase py-1 text-gray-300 font-bold'>
					{started} - {ended}
				</p>

				<ul className='list-disc ml-5 text-md'>
					{projects.map((project: any) => {
						return <li>{project}</li>;
					})}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
