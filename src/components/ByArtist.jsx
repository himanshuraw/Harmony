import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import ContentRow from './ContentRow';

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

const ByArtist = () => {
	const { token } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [artist, setArtist] = useState();

	useEffect(() => {
		const random = Math.floor(Math.random() * artistArray.length);
		const artist = artistArray[random];
		setArtist(artist);
		setLoading(true);
		if (token === '') {
			navigate(`/auth`);
		} else {
			fetchData(`/artists/${artist.id}/albums`, token).then((data) => {
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
					items={data?.items}
					title={`By ${artist.name}`}
					type={`Album`}
				/>
			)}
		</section>
	);
};

export default ByArtist;
