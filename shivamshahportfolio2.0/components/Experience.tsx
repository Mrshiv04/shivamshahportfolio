import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

type Props = {};

var obj1 = {
	companyLogo: 'https://st1.bgr.in/wp-content/uploads/2015/10/infosys-logo.jpg',
	companyHeader: 'Senior Systems Engineer',
	companyName: 'Infosys Ltd',
	skills: [
		'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
		'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
		'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
		'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	],
	started: 'Dec 2017',
	ended: 'Jan 2021',
	projects: [
		'Worked across different domains like Telecom, Banking, Financial services as a fullstack developer/ UI Developer, implemented new features and fixed existing bugs in the application, Did Testing for new/existing built activity for various application related projects.',
	],
};

var obj2 = {
	companyLogo:
		'https://upload.wikimedia.org/wikipedia/en/d/d2/Quest_Global_logo.svg',
	companyHeader: 'FrontEnd Developer',
	companyName: 'Quest Global',
	skills: [
		'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		'https://d33wubrfki0l68.cloudfront.net/97f337956b87f4589dbf68591f22f5f3dacf2736/55f2a/img/redux_white.svg',
		'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
		'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
		'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	],
	started: 'Jan 2021',
	ended: 'Jul 2021',
	projects: [
		'Worked on the cascade application for Apple client for their IS&T project as a front end developer. Handled the implemented new and existing features.',
	],
};

var obj3 = {
	companyLogo:
		'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-ProBono-Consulting-XS-marquee?qlt=85&wid=1200&ts=1666695305504&fit=wrap&dpr=off',
	companyHeader: 'Application Development Senior Analyst',
	companyName: 'Accenture',
	skills: [
		'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		'https://d33wubrfki0l68.cloudfront.net/97f337956b87f4589dbf68591f22f5f3dacf2736/55f2a/img/redux_white.svg',
		'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
		'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
		'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	],
	started: 'July 2021',
	ended: 'Present',
	projects: [
		'Currently working as a ReactJs developer for multiple clients across different domains like FMCG, Automotive, Aerospace, handling complete UI activities including requirement gathering, development, testing and maintaining.',
	],
};

function Experience({}: Props) {
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
				Experience
			</h3>
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
				<ExperienceCard {...obj1} />
				<ExperienceCard {...obj2} />
				<ExperienceCard {...obj3} />
			</div>
		</motion.div>
	);
}

export default Experience;
