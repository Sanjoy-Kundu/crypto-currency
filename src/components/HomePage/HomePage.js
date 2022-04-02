import React from 'react';
import './HomePage.css'

const HomePage = () => {
	return (
		<div className='sm:mx-auto lg:mx-auto'>
			<h1 className='lg:text-teal-500 text-center text-5xl mt-5'>Developed By <span className='text-purple-500'>Sanjoy</span> Kundu</h1>
			<p className='text-center text-3xl mt-5 '>Email: <span className='text-teal-900'>sanjoykundu187@gamil.com</span></p>
			<h2 className='text-green-400 text-6xl text-center mt-10'>Thank's for visiting My page</h2>
		</div>
	);
};

export default HomePage;