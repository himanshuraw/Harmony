import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';

const BannerItems = () => {
	const { token } = useSelector((state) => state.user);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading('true');

		const playlist_ids = [
			'37i9dQZEVXcEyEDidQGpsv',
			'37i9dQZF1EIVyBIq9f8DAH',
			'37i9dQZF1DXbYM3nMM0oPk',
			'37i9dQZF1EQn4jwNIohw50',
			'37i9dQZF1DWWxPM4nWdhyI',
			'37i9dQZF1DX6bnzK9KPvrz',
		];

		if (token === '') {
			navigate('auth');
		} else {
			Promise.all(
				playlist_ids.map((id) =>
					fetchData(`/playlists/${id}`, token)
						.then((res) => res)
						.catch((err) => {
							console.log(err);
							setLoading(false);
						})
				)
			).then((res) => {
				setData(res);
				setLoading(false);
			});
		}
	}, []);

	return (
		<>
			{loading ? (
				<div className='gridgrid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4'>
					{' '}
					loading .....
				</div>
			) : (
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-4'>
					{data?.map((d) => (
						<div
							key={d?.id}
							className='flex bg-white bg-opacity-10 rounded-[4px] overflow-hidden'
						>
							<img
								src={d?.images[0]?.url}
								className='h-16 lg:h-20 aspect-square'
							/>
							<div className='w-full flex items-center justify-between'>
								<div className='px-4 text-lg'> {d?.name} </div>
								<div></div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default BannerItems;
