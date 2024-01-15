import { Currency } from './definitions';
import { formatAmount } from './utils';
import { formatName } from './utils';

import dotenv from 'dotenv';
dotenv.config();

// Get currencies from Bitnovo API 
export async function fetchCurrencies() {
	try {
		// Add device id to headers
		const headers = new Headers({
			'X-Device-Id': process.env.NEXT_PUBLIC_DEVICE_ID || '',
		});
		// Fetch currencies data
		const response = await fetch('https://payments.pre-bnvo.com/api/v1/currencies', { headers });
		const data = await response.json();
		let currentId = 1; // Initialize counter variable
		const currencies = data.map((currency: Currency) => ({
			...currency,
			id: currentId++,
			name: formatName(currency.name),
			min_amount: formatAmount(currency.min_amount), // Convert max and min amount to number
			max_amount: formatAmount(currency.max_amount), // Convert max and min amount to number
		}));
		return currencies;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw new Error('Failed to fetch currencies data.');
	}
};
