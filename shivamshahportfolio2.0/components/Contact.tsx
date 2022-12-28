import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function Contact({}: Props) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:shivam.shah095@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.     ${formData.message} from- ${formData.email}`;
	};
	return (
		<div className='flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-5xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-20 lg:top-5 md:top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact Me
			</h3>
			<div className='flex flex-col space-y-5'>
				<h4 className='text-2xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#F7AB0A]/50 underline'>Lets talk</span>
				</h4>
				<div className='space-y-5'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+91 9903849700</p>
					</div>

					{/* <div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>Kolkata</p>
					</div> */}

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>shivam.shah095@gmail.com</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto'
				>
					<div className='space-x-2'>
						<input
							{...register('name')}
							className='contactInput'
							type='text'
							placeholder='Name'
						/>
						<input
							{...register('email')}
							className='contactInput'
							type='Email'
							placeholder='Email'
						/>
					</div>
					<input
						{...register('subject')}
						className='contactInput'
						type='text'
						placeholder='Subject'
					/>
					<textarea
						{...register('message')}
						className='contactInput'
						placeholder='Message'
					/>
					<button
						type='submit'
						className='bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
