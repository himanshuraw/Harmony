import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import ContentRow from './ContentRow';

const Featured = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		console.log('featured');
		if (token === '') {
			navigate(`/auth`);
		} else {
			fetchData(`/browse/featured-playlists`, token).then((data) => {
				setData(data);
				setLoading(false);
			});
		}
	}, []);
	return (
		<section className='mb-4'>
			{loading ? (
				<div>loading...</div>
			) : (
				<ContentRow
					items={data?.playlists?.items}
					title={data?.message}
					type={`Playlist`}
				/>
			)}
		</section>
	);
};

export default Featured;
