const Card = ({ playlist }) => {
	return (
		<div>
			<img src={playlist?.images[0]?.url} />
			<div>{playlist.name}</div>
		</div>
	);
};

export default Card;
