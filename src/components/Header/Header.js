import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
	return (
		<div className='sticky top-0 px-12  py-8 flex justify-between bg-purple-200 '>
			<div className='hidden md:block'>
				<Link to='/' className='font-bold text-purple-600 text-2xl'>Crypto Currency</Link>
			</div>
			<div className='flex gap-4 text-xl text-center'>
				<CustomLink to='/'>Home</CustomLink>
				<CustomLink to='/coins'>Coins</CustomLink>
				<CustomLink to='/contact'>Contact</CustomLink>
				<CustomLink to='/about'>About</CustomLink>
			</div>


		</div>
	);
};

export default Header;