import CardSkeleton from '../components/CardSkeleton';

export const HomeLoading = () => {
	return (
		<div className='flex flex-col gap-6 px-4'>
			<div className='mb-4'>
				<div className='h-10 bg-[#242424] w-1/4 mb-4' />
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-4'>
					{Array(6)
						.fill(true)
						.map((item, i) => (
							<div
								key={i}
								className='flex bg-white bg-opacity-10 rounded-[4px] overflow-hidden'
							>
								<div className='h-16 lg:h-20 aspect-square bg-[#363636]'></div>
							</div>
						))}
				</div>
			</div>

			<div className='h-8 bg-[#242424] w-1/6' />
			<div
				className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 overflow-hidden'
				style={{ gridTemplateRows: `1fr 0px` }}
			>
				{Array(7)
					.fill(true)
					.map((item, i) => (
						<CardSkeleton key={i} />
					))}
			</div>
			<div className='h-8 bg-[#242424] w-1/6' />

			<div
				className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 overflow-hidden'
				style={{ gridTemplateRows: `1fr 0px` }}
			>
				{Array(7)
					.fill(true)
					.map((item, i) => (
						<CardSkeleton key={i} />
					))}
			</div>
			<div className='h-8 bg-[#242424] w-1/6' />

			<div
				className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 overflow-hidden'
				style={{ gridTemplateRows: `1fr 0px` }}
			>
				{Array(7)
					.fill(true)
					.map((item, i) => (
						<CardSkeleton key={i} />
					))}
			</div>
		</div>
	);
};
