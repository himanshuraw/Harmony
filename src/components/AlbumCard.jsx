import { useNavigate } from 'react-router-dom';
import Card from './Card';

const AlbumCard = ({ album }) => {
	const description = `${album?.release_date?.slice(0, 4)}`;
	const navigate = useNavigate();
	return (
		<Card
			name={album.name}
			img={album?.images[0]?.url}
			description={description}
			isCircle={false}
			onclick={() => navigate(`/album/${album.id}`)}
		/>
	);
};

export default AlbumCard;
