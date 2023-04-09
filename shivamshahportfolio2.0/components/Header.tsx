import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'
			>
				<SocialIcon
					url='https://www.linkedin.com/in/shivam-shah-924737117/'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>

				<SocialIcon
					url='https://www.facebook.com/shivam.shah.144'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>

				<SocialIcon
					url='https://github.com/Mrshiv04'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>

				<SocialIcon
					url='https://www.instagram.com/mrshiv04/'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>
			</motion.div>

			{/* <Link href='#contact'> */}
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center text-gray-300 cursor-pointer'
			>
				<SocialIcon
					className='cursor-pointer'
					network='sharethis'
					fgColor='gray'
					bgColor='transparent'
					url='https://drive.google.com/file/d/1FxQ-jK9_8s1sCVF5HQ50iFdONb9zNyum/view?usp=share_link'
					target={'_blank'}
					rel='noopener noreferrer'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					<a
						href='https://drive.google.com/file/d/1FxQ-jK9_8s1sCVF5HQ50iFdONb9zNyum/view?usp=share_link'
						target={'_blank'}
						rel='noopener noreferrer'
					>
						Download CV
					</a>
				</p>
			</motion.div>
			{/* </Link> */}
		</header>
	);
}

export default Header;
