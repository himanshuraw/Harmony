import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import ContentRow from '../components/ContentRow';
import SongRow from '../components/SongRow';
import TopResult from '../components/TopResult';

const type = 'album,artist,playlist,track';

const SearchResult = () => {
	const { q } = useParams();
	const { token } = useSelector((state) => state.user);
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		setLoading(true);
		if (token == '') {
			navigate(`/auth`);
		}
		const params = {
			q,
			type,
		};
		fetchData(`/search`, token, params).then((data) => {
			console.log(data);
			setData(data);
			setLoading(false);
		});
	}, [q]);
	return (
		<section className='mt-16 px-6'>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
					<div className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6'>
						<div className='col-span-2 mb-4'>
							<h2 className='font-bold text-2xl mb-4'>Top result</h2>
							<TopResult data={data?.tracks?.items[0]} />
						</div>
						<div className='col-span-2 lg:col-span-3 xl:col-span-5'>
							<div className='mb-4 mn px-4'>
								<h2 className='font-bold text-2xl'>Songs</h2>
							</div>
							{data?.tracks?.items?.slice(0, 4)?.map((item) => (
								<div key={item?.id}>
									<SongRow track={item} />
								</div>
							))}
						</div>
					</div>
					<ContentRow
						items={data?.artists?.items}
						type='Artist'
						title='Artists'
					/>
					<ContentRow items={data?.albums?.items} type='Albums' title='Album' />
					<ContentRow
						items={data?.playlists?.items}
						type='Playlist'
						title='Playlists'
					/>
				</div>
			)}
		</section>
	);
};

export default SearchResult;
