import Card from './Card';

const AlbumCard = ({ album }) => {
	const description = `${album?.release_date?.slice(0, 4)}`;
	return (
		<Card
			name={album.name}
			img={album?.images[0]?.url}
			description={description}
			isCircle={false}
		/>
	);
};

export default AlbumCard;
