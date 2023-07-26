import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import PlaylistCard from '../components/PlaylistCard';

const Genre = () => {
	const { id } = useParams();
	const [playlists, setPlaylists] = useState();
	const [loading, setLoading] = useState(true);
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (token === '') {
			navigate('/auth');
		} else {
			setLoading(true);
			fetchData(`/browse/categories/${id}/playlists`, token).then((data) => {
				setPlaylists(data?.playlists?.items);
				setLoading(false);
			});
		}
	}, []);

	return (
		<section className='mt-16 pt-2 px-4 lg:px-6 '>
			<div>Genre {id} </div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6'>
					{playlists?.map((playlist) => (
						<div
							key={playlist?.id}
							onClick={() => navigate(`/playlist/${playlist.id}`)}
						>
							<PlaylistCard playlist={playlist} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Genre;
