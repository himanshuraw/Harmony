import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import ContentRow from '../components/ContentRow';
import SongRow from '../components/SongRow';

const Artist = () => {
	const { id } = useParams();
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		if (token == '') {
			navigate('/auth');
		}
		Promise.all([
			fetchData(`/artists/${id}`, token),
			fetchData(`/artists/${id}/albums`, token),
			fetchData(`/artists/${id}/related-artists`, token),
			fetchData(`/artists/${id}/top-tracks`, token, { market: 'US' }),
		]).then((data) => {
			console.log(data);

			setData(data);
			setLoading(false);
		});
	}, []);
	return (
		<div className='relative'>
			{loading ? (
				<div>loading...</div>
			) : (
				<>
					<div
						style={{
							backgroundImage: `url(${data[0]?.images[0]?.url})`,
							height: `90vh`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: `cover`,
							marginTop: `-40vh`,
						}}
						className='flex flex-col justify-end px-6 pb-6'
					>
						<div className='mt-2'>
							<h1 className='mt-[0.08em] mb-[0.12em] font-black text-8xl'>
								{data[0]?.name}
							</h1>
							<div className='mt-1'>followers: {data[0]?.followers?.total}</div>
						</div>
					</div>

					<div className={`px-6`}>
						<div className='my-10'>
							{data[3]?.tracks?.slice(0, 5)?.map((item, i) => (
								<div key={item.id}>
									<SongRow track={item} i={i++ + 1} />
								</div>
							))}
						</div>
						<ContentRow
							items={data[1]?.items}
							title={'Discover Albums'}
							type={'Album'}
						/>
						<ContentRow
							items={data[2]?.artists}
							title={'Fans also like'}
							type={'Artist'}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Artist;
