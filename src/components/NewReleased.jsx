// import { useEffect, useState } from 'react';

import ContentRow from './ContentRow';

const NewReleased = ({ data }) => {
	return (
		<section className='mb-4'>
			<ContentRow
				items={data?.albums?.items}
				title={`New Released`}
				type={`Album`}
			/>
		</section>
	);
};

export default NewReleased;
