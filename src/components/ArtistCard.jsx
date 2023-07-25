import { useNavigate } from 'react-router-dom';
import Card from './Card';

const ArtistCard = ({ artist }) => {
	const navigate = useNavigate();
	return (
		<Card
			name={artist.name}
			img={artist?.images[0]?.url}
			description='artist'
			isCircle={true}
			onclick={() => navigate(`/artist/${artist.id}`)}
		/>
	);
};

export default ArtistCard;
