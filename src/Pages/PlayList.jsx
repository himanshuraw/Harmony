import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useSelector } from 'react-redux';
import Image from '../components/Image';

const PlayList = () => {
	const { id } = useParams();
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [playlist, setPlaylist] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		if (token === '') {
			navigate('/auth');
		} else {
			fetchData(`/playlists/${id}`, token).then((data) => {
				setPlaylist(data);
				console.log(data);
				setLoading(false);
			});
		}
	}, []);
	return (
		<section className='relative'>
			{loading ? (
				<div>loading...</div>
			) : (
				<>
					<div
						className='flex overflow-hidden relative px-6 pb-6 bg-slate-600'
						style={{ height: `clamp(340px, 30vh, 400px)` }}
					>
						<div>
							<Image src={playlist?.images[0]?.url} />
						</div>
						<div>PlayList {id}</div>
					</div>
				</>
			)}
		</section>
	);
};

export default PlayList;
