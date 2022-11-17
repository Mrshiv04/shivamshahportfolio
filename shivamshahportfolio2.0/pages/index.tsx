import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';

export default function Home() {
	return (
		<div
			className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
		scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
		>
			<Head>
				<title>Shivam Shah 2.0</title>
			</Head>

			<Header />

			<section id='hero' className='snap-start'>
				<Hero />
			</section>

			<section id='about' className='snap-center'>
				<About />
			</section>

			<section id='experience' className='snap-start'>
				<Experience />
			</section>

			<section id='skills' className='snap-start'>
				<Skills />
			</section>

			<section id='project' className='snap-start'>
				<Project />
			</section>

			<section id='contact' className='snap-center'>
				<Contact />
			</section>

			<Link href='#hero'>
				<footer className='sticky bottom-0 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<img
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src='https://www.clipartmax.com/png/full/274-2749145_coroflot-home-button-icon-orange.png'
							alt='home'
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
}
