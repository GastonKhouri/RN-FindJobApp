import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

export const jobApi = axios.create( {
	baseURL: 'https://jsearch.p.rapidapi.com',
	headers: {
		'X-RapidAPI-Key': rapidApiKey,
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
} );