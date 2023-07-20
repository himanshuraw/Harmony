import Image from './Image';

const Card = ({ playlist }) => {
	return (
		<div className='p-4 bg-[#181818] rounded-lg'>
			<div>
				<div className='mb-4 rounded-md shadow-lg'>
					<Image src={playlist?.images[0]?.url} />
				</div>

				<div className='block box-border tracking-[0.0195em]'>
					<div className='mb-1 font-semibold line-clamp-1 text-ellipsis whitespace-normal'>
						{playlist.name}
					</div>
					<div className='text-sm  text-[#a7a7a7] lg:font-normal'>
						<div className='line-clamp-2 text-ellipsis whitespace-normal'>
							{playlist.description}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
