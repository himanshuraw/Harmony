import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../utils/getAuth';
import { getToken } from '../store/userSlice';
import { fetchData } from '../utils/fetchData';

const BannerItems = () => {
	const { token } = useSelector((state) => state.user);
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

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
			getAuth().then((result) => {
				dispatch(getToken(result));

				Promise.all(
					playlist_ids.map((id) =>
						fetchData(`/playlists/${id}`, result)
							.then((res) => res)
							.catch((err) => {
								setLoading(false);
								console.log(err);
							})
					)
				).then((res) => {
					setData(res);
					setLoading(false);
				});
			});
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
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4'>
					{data?.map((d) => (
						<div
							key={d?.id}
							className='flex bg-white bg-opacity-10 rounded-[4px] overflow-hidden'
						>
							<img src={d.images[0].url} className='h-20 aspect-square' />
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
