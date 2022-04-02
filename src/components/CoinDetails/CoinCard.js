import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {

	return (
		<div className='shadow-lg rounded-2xl w-[250px] bg-white p-10 sm:mx-auto lg:mx-auto'>
			<Link to={`/coin-details/${coin.id}`}>
				<div className='flex gap-4 justify-between items-end'>
					<div className='shrink-0'>
						<img src={coin.image} alt="i-pic" className='h-16 w-16' />
					</div>
					<div className='flex flex-col justify-end'>
						<span>{coin.name}</span>
						<span>{coin.symbol}</span>
					</div>

				</div>

			</Link>

		</div>
	);
};

export default CoinCard;