import ContentRow from './ContentRow';

const ByArtist = ({ data, artist }) => {
	return (
		<section className='mb-4'>
			<ContentRow
				items={data?.items}
				title={`By ${artist.name}`}
				type={`Album`}
			/>
		</section>
	);
};

export default ByArtist;
