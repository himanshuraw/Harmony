import Image from './Image';

const TopResult = ({ data }) => {
	return (
		<div className='flex flex-col bg-[#181818] gap-5 p-5 rounded-lg'>
			<div className='w-[92px] pb-[92px] aspect-square rounded-md overflow-hidden'>
				<Image src={data?.album?.images[0]?.url} />
			</div>
			<div>
				<div className='font-bold text-3xl line-clamp-1 text-ellipsis whitespace-normal mb-1'>
					{data?.name}
				</div>
				<div className='text-[#b3b3b3] text-sm flex'>
					{data?.artists?.slice(0, 3)?.map((artist, i) => (
						<div key={artist.id}>
							{artist.name}
							{i !== data?.artists?.length - 1 ? ',' : ''}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopResult;
