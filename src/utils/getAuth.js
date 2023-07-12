import axios from 'axios';
import QueryString from 'qs';
// const client_id = import.meta.env.VITE_CLIENT_ID;
// const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const auth_token = import.meta.env.VITE_AUTH_TOKEN;

export const getAuth = async () => {
	try {
		//make post request to SPOTIFY API for access token, sending relavent info
		const token_url = 'https://accounts.spotify.com/api/token';
		const data = QueryString.stringify({ grant_type: 'client_credentials' });

		const response = await axios.post(token_url, data, {
			headers: {
				Authorization: `Basic ${auth_token}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		//return access token
		return response.data.access_token;
		//console.log(response.data.access_token);
	} catch (error) {
		//on fail, log the error in console
		console.log(error);
	}
};
