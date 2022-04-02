import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinInfo = () => {
	const { id } = useParams()
	const [coin, setCoin] = useState({})
	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
			.then(res => res.json())
			.then(data => setCoin(data))
			.then(data => console.log(data))
	}, [id])
	return (
		<div className='px-4 py-10 mx-auto mx-w-7xl md:px-2'>
			<h1 className='text-6xl mb-10 text-purple-500'>Cyripto Currencys Info:</h1>
			<div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 bg-stone-400'>
				<img src={coin.image?.large} alt="" className='mt-20 h-30 w-30' />
				<div className='mt-20 p-5'>

					<h1 className='text-5xl'>Name: {coin.name}</h1>
					<h2 className='text-4xl'>Score:{coin.coingecko_score}</h2>
					<h3 className='text-4xl'>Origin : {coin.country_origin ? coin.country_origin : "Not Found"}</h3>
					<h3 className='text-4xl'>Developer Option: {coin.developer_score}</h3>
					<h3 className='text-4xl'>Developer Option: {coin.developer_score}</h3>
					<h3 className='text-4xl'>Increasing: {coin.sentiment_votes_down_percentage}</h3>
					<h3 className='text-4xl'>Decreasing: {coin.sentiment_votes_up_percentage}</h3>



				</div>

			</div>


		</div>
	);
};

export default CoinInfo;