import { useNavigate } from 'react-router-dom';
import Card from './Card';

const PlaylistCard = ({ playlist }) => {
	const navigate = useNavigate();
	return (
		<Card
			name={playlist.name}
			img={playlist?.images[0]?.url}
			description={playlist.description}
			isCircle={false}
			onclick={() => navigate(`/playlist/${playlist.id}`)}
		/>
	);
};

export default PlaylistCard;
