import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinDetails/CoinCard';
import './Coins.css'

const Coins = () => {
	const [coins, setCoins] = useState([])
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
			.then(res => res.json())
			.then(data => setCoins(data))
	}, [])
	return (
		<div className='px-4 pt-10 mx-auto max-w-7xl md:px-2'>
			<h1 className='text-center md:text-3xl lg:text-3xl sm:text-sm '>Available CyroptoCurrencies</h1>
			<p className='text-center md:text-3xl lg:text-3xl sm:text-sm'>Total Coins: {coins.length}</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-4 mx-auto sm:mx-auto'>
				{
					coins.map(coin => <CoinCard coin={coin} key={coin.id} />)
				}
			</div>

		</div>
	);
};

export default Coins;