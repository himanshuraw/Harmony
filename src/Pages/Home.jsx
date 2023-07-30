import Banner from '../components/Banner';
import Featured from '../components/Featured';
import NewReleased from '../components/NewReleased';
import ByArtist from '../components/ByArtist';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { artistArray, playlist_ids } from '../utils/data';
import { HomeLoading } from '../LoadingPages/HomeLoading';

const Home = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [artist, setArtist] = useState();
	const [artist2, setArtist2] = useState();

	useEffect(() => {
		setLoading(true);
		if (token === '') {
			navigate(`/auth`);
		} else {
			const random = Math.floor(Math.random() * artistArray.length);
			const artist = artistArray[random];
			const artist2 = artistArray[(random + 1) % artistArray.length];
			setArtist(artist);
			setArtist2(artist2);
			Promise.all([
				Promise.all(
					playlist_ids.map((id) => fetchData(`/playlists/${id}`, token))
				),
				fetchData(`/browse/featured-playlists`, token),
				fetchData(`/browse/new-releases`, token),
				fetchData(`/artists/${artist.id}/albums`, token),
				fetchData(`/artists/${artist2.id}/albums`, token),
			]).then((data) => {
				console.log(data);
				setData(data);
				setLoading(false);
			});
		}
	}, []);

	return (
		<section className='mt-16 lg:px-6 '>
			<div className='pt-2 '>
				{loading ? (
					<HomeLoading />
				) : (
					<div className='flex flex-col gap-6 px-4'>
						<Banner data={data[0]} />
						<Featured data={data[1]} />
						<NewReleased data={data[2]} />
						<ByArtist data={data[3]} artist={artist} />
						<ByArtist data={data[4]} artist={artist2} />
					</div>
				)}
			</div>
		</section>
	);
};

export default Home;
