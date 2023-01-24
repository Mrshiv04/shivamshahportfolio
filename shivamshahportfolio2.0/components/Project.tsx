import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Project({}: Props) {
	const projects = [
		{
			name: 'Netflix Clone',
			source:
				'https://thedailyguardian.com/wp-content/uploads/2022/09/Netflix.jpg',
			details:
				'Created a Netflix clone where contents are changed dynamic ally every time you refresh or open the application. The application looks almost same as that of the original Netflix application.',
			link: 'https://netflix-clone-ac8bc.web.app/',
		},
		{
			name: 'Google Search Clone',
			source:
				'https://cdn.dribbble.com/users/2037940/screenshots/6228108/google-logo.png',
			details:
				'Created a Google Search Clone using React.Js where user can search a keyword and the application will return multiple results to that keyword.',
			link: 'https://clone-4b426.web.app/',
		},
		{
			name: 'LinkedIn Clone',
			source:
				'https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/linkedin-search-630834c87e29b-sej-1520x800.webp',
			details:
				'Created a Linkedin clone having functionality of posting in feed, login and logout, and even creating a new account with profile pictures.',
			link: 'https://shivam-linkedin-clone.web.app/',
		},
		{
			name: 'Covid 19 Tracker',
			source:
				'https://media.npr.org/assets/img/2020/04/13/jhu_custom-a562a0534ff35aa108566d5e2bc58ad3cec81645-s1200-c85.webp',
			details:
				'Created Covid19 tracker, show details of number of affected, deaths and recovered country wise in real-time.',
			link: 'https://covid20-tracker.web.app/',
		},
		{
			name: 'AirBnB Clone',
			source:
				'https://assets.theedgemarkets.com/airbnb-12354_reuters.jpg?FbalSo2FU.eGwTqo9O7nETHDm7x.dHRW',
			details:
				'Created an AirBnB replica using react.JS , material UI, HTML/CSS which has the exact look and feel of the original website.',
			link: 'https://shivam-airbnb.web.app/',
		},
		{
			name: 'Gmail Clone',
			source:
				'https://i.pcmag.com/imagery/articles/025Oaztt0ita5uBZZnF7f6p-1.fit_lim.size_1600x900.v1662056326.jpg',
			details:
				'Created an Gmail replica using react.Js , materialUI, HTML/CSS which has the exact look and feel of the original website.',
			link: 'https://shivam-mail-clone.web.app/',
		},
		{
			name: 'Bingewatching Database',
			source:
				'https://images.creativemarket.com/0.1.0/ps/7414066/600/400/m2/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=50e3d37c1ab493df98baf6eb75f2a430&fmt=webp',
			details:
				'Bingewatching Database is an authoritative source for movie content, designed to help fans explore the world of movies and decide what to watch. Its searchable database includes millions of movies.',
			link: 'https://shivam-moviesdb.web.app/',
		},
		{
			name: 'Youtube Clone',
			source:
				'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/828x552/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/10581501/wjoel_1777_180403_youtube_003.jpg',
			details:
				'YouTube is an American online video-sharing platform headquartered in San Bruno, California. This is a front-end only application made by me, here ive tried replicating the dark mode of the application. It is slick and almost identical to that of real application.',
			link: 'https://shivam-utube.web.app/',
		},
	];
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

			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
				{projects.map((project, i) => (
					<div
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 md:p-44 h-screen '
						key={i}
					>
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
							src={project.source}
							alt='img'
						/>
						<div className='space-y-5 md:px-10 max-w-6xl '>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#F7AB0A]/50'>
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								{project.name}
							</h4>
							<p className='text-lg text-center md:text-left'>
								{project.details}
							</p>
							<p>
								Check out this app here:{' '}
								<a
									className='underline decoration-[#F7AB0A]/50'
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									{project.link}
								</a>
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
