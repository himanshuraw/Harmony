import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import ContentRow from '../components/ContentRow';

const type = 'album,artist,playlist,track';

const SearchResult = () => {
	const { q } = useParams();
	const { token } = useSelector((state) => state.user);
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
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
		<section className='m-16'>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
					<ContentRow
						items={data?.artists?.items}
						type='Artist'
						title='Artist'
					/>
					<ContentRow items={data?.albums?.items} type='Album' title='Album' />
					<ContentRow
						items={data?.playlists?.items}
						type='Playlist'
						title='Playlist'
					/>
				</div>
			)}
		</section>
	);
};

export default SearchResult;
