import Card from './Card';

const ArtistCard = ({ artist }) => {
	return (
		<Card
			name={artist.name}
			img={artist?.images[0]?.url}
			description='artist'
			isCircle={true}
		/>
	);
};

export default ArtistCard;
