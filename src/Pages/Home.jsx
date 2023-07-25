import Banner from '../components/Banner';
import Featured from '../components/Featured';
import NewReleased from '../components/NewReleased';
import ByArtist from '../components/ByArtist';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const playlist_ids = [
	'37i9dQZEVXcEyEDidQGpsv',
	'37i9dQZF1EIVyBIq9f8DAH',
	'37i9dQZF1DXbYM3nMM0oPk',
	'37i9dQZF1EQn4jwNIohw50',
	'37i9dQZF1DWWxPM4nWdhyI',
	'37i9dQZF1DX6bnzK9KPvrz',
];

const artistArray = [
	{ name: 'Weeknd', id: '1Xyo4u8uXC1ZmMpatF05PJ' },
	{ name: 'Shawn Mendes', id: '7n2wHs1TKAczGzO7Dd2rGr' },
	{ name: 'Ariana Grande', id: '66CXWjxzNUsdJxJ2JdwvnR' },
	{ name: 'Selena Gomez', id: '0C8ZW7ezQVs4URX5aX7Kqx' },
	{ name: 'Arjit Singh', id: '4YRxDV8wJFPHPTeXepOstw' },
	{ name: 'Talha Anjum', id: '69xcFpmqTOmFNOL08Bxyci' },
	{ name: 'Zayn', id: '5ZsFI1h6hIdQRw2ti0hz81' },
	{ name: 'Bebe Rexha', id: '64M6ah0SkkRsnPGtGiRAbb' },
];

const Home = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [artist, setArtist] = useState();

	useEffect(() => {
		setLoading(true);
		if (token === '') {
			navigate(`/auth`);
		} else {
			const random = Math.floor(Math.random() * artistArray.length);
			const artist = artistArray[random];
			setArtist(artist);
			Promise.all([
				Promise.all(
					playlist_ids.map((id) => fetchData(`/playlists/${id}`, token))
				),
				fetchData(`/browse/featured-playlists`, token),
				fetchData(`/browse/new-releases`, token),
				fetchData(`/artists/${artist.id}/albums`, token),
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
					<div>loading...</div>
				) : (
					<div className='flex flex-col gap-6 px-4'>
						<Banner data={data[0]} />
						<Featured data={data[1]} />
						<NewReleased data={data[2]} />
						<ByArtist data={data[3]} artist={artist} />
					</div>
				)}
			</div>
		</section>
	);
};

export default Home;
