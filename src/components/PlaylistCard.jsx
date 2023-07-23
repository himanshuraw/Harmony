import Card from './Card';

const PlaylistCard = ({ playlist }) => {
	return (
		<Card
			name={playlist.name}
			img={playlist?.images[0]?.url}
			description={playlist.description}
			isCircle={false}
		/>
	);
};

export default PlaylistCard;
