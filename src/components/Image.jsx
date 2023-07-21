import { useCallback, useRef, useState } from 'react';
import useIntersection from '../hooks/useIntersection';

const Image = ({ src }) => {
	const [isInView, setIsInView] = useState(false);
	const ref = useRef();

	const callback = useCallback(() => {
		setIsInView(true);
	}, [setIsInView]);

	useIntersection(ref, callback);

	return (
		<div ref={ref}>
			{isInView && <img src={src} className='w-full aspect-square ' />}{' '}
		</div>
	);
};

export default Image;
