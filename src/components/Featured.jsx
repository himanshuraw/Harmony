import ContentRow from './ContentRow';

const Featured = ({ data }) => {
	return (
		<section className='mb-4'>
			<ContentRow
				items={data?.playlists?.items}
				title={data?.message}
				type={`Playlist`}
			/>
		</section>
	);
};

export default Featured;
