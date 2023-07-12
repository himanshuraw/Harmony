const BASE_URL = 'https://api.spotify.com/v1';

import axios from 'axios';

export const fetchData = async (url, token, params) => {
	try {
		const response = await axios.get(BASE_URL + url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: params,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
