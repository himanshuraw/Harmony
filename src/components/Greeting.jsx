import { useEffect, useState } from 'react';

const Greeting = () => {
	const [greet, setGreeting] = useState('');

	function refreshClock() {
		const date = new Date();
		const hr = date.getHours();
		hr <= 12
			? setGreeting('Goog morning')
			: hr <= 16
			? setGreeting('Good afternoon')
			: setGreeting('Good evening');
	}

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	return (
		<div>
			<h2 className='font-bold text-3xl mb-4'>{greet}</h2>
		</div>
	);
};

export default Greeting;
