const CardSkeleton = () => {
	return (
		<div className='p-4 bg-[#181818] rounded-lg cursor-pointer'>
			<div>
				<div className={`mb-4 rounded-md shadow-lg bg-[#242424]`}>
					<div className='w-full aspect-square'></div>
				</div>

				<div className='block box-border tracking-[0.0195em]'>
					<div className='h-5 bg-[#242424] mb-1' />

					<div className='h-10 bg-[#242424]' />
				</div>
			</div>
		</div>
	);
};

export default CardSkeleton;
