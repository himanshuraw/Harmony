import Image from './Image';

const Card = ({ name, img, description, isCircle, onclick }) => {
	return (
		<div
			className='p-4 bg-[#181818] rounded-lg cursor-pointer'
			onClick={onclick}
		>
			<div>
				<div
					className={`mb-4 ${
						isCircle ? 'rounded-full' : 'rounded-md'
					} shadow-lg overflow-hidden`}
				>
					<Image src={img} />
				</div>

				<div className='block box-border tracking-[0.0195em]'>
					<div className='mb-1 font-semibold line-clamp-1 text-ellipsis whitespace-normal'>
						{name}
					</div>
					{description == '' ? (
						<div className='h-10' />
					) : (
						<div className='text-sm  text-[#a7a7a7] lg:font-normal'>
							<div className='line-clamp-2 text-ellipsis whitespace-normal'>
								{description}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
