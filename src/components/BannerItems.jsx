import Image from './Image';

const BannerItems = ({ data }) => {
	return (
		<>
			<div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-4'>
				{data?.map((d) => (
					<div
						key={d?.id}
						className='flex bg-white bg-opacity-10 rounded-[4px] overflow-hidden'
					>
						<div className='h-16 lg:h-20 aspect-square'>
							<Image src={d?.images[0]?.url} />
						</div>
						<div className='w-full flex items-center justify-between'>
							<div className='px-4 text-lg'> {d?.name} </div>
							<div></div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default BannerItems;
