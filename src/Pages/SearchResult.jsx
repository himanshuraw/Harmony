import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import ArtistCard from '../components/ArtistCard';

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
			<div>SearchResult {q}</div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div>
					<div>Artist</div>
					<div className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6'>
						{data?.artists?.items?.map((item) => (
							<div key={item.id}>
								<ArtistCard artist={item} />
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default SearchResult;
