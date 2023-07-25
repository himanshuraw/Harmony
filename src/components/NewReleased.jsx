import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import ContentRow from './ContentRow';

const NewReleased = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		console.log('newReleased');
		if (token === '') {
			navigate(`/auth`);
		} else {
			fetchData(`/browse/new-releases`, token).then((data) => {
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
					items={data?.albums?.items}
					title={`New Released`}
					type={`Album`}
				/>
			)}
		</section>
	);
};

export default NewReleased;
