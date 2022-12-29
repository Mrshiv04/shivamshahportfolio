import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import sqllogo from '../public/mysqllogo.png';

type Props = {};

var js = {
	source:
		'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
	rating: '85',
};

var react = {
	source: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	rating: '90',
};

var typescript = {
	source:
		'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	rating: '70',
};

var html = {
	source:
		'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	rating: '90',
};

var css = {
	source:
		'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	rating: '85',
};

var mysql = {
	source: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
	rating: '75',
};

var redux = {
	source:
		'https://d33wubrfki0l68.cloudfront.net/97f337956b87f4589dbf68591f22f5f3dacf2736/55f2a/img/redux_white.svg',
	rating: '80',
};

var python = {
	source:
		'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
	rating: '70',
};

function Skills({}: Props) {
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
			className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
		>
			<h3 className='absolute top-20 sm:top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>
			<h2 className='absolute top-[115px] uppercase tracking[-3px] text-gray-500 text-sm'>
				Hover over a skill for current profeciency
			</h2>

			<div className='grid grid-cols-4 gap-5'>
				<Skill {...js} />
				<Skill {...react} />
				<Skill {...typescript} />
				<Skill {...redux} />
				<Skill {...mysql} />
				<Skill {...html} />
				<Skill {...css} />
				<Skill {...python} />
			</div>
		</motion.div>
	);
}

export default Skills;
