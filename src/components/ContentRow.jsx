import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import PlaylistCard from './PlaylistCard';

const ContentRow = ({ items, type, title }) => {
	return (
		<section className='mb-4'>
			<div className='mb-4 flex'>
				<div className='font-bold text-2xl'>{title}</div>
			</div>
			<div
				className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 overflow-hidden'
				style={{ gridTemplateRows: `1fr 0px` }}
			>
				{items?.slice(0, 7)?.map((item) => (
					<div key={item.id}>
						{type === 'Playlist' ? (
							<PlaylistCard playlist={item} />
						) : type === 'Album' ? (
							<AlbumCard album={item} />
						) : (
							<ArtistCard artist={item} />
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default ContentRow;
