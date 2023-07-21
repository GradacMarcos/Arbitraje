import axios from 'axios';
const API_URL = 'https://64b70e09df0839c97e1660c4.mockapi.io/api/movements';
export type MovementData = {
	date: string;
	amount_operated: number;
	cripto: string;
	side: boolean;
	amount: number;
	price: number;
	badge: number;
	Echange: string;
	result: number;
	id: string;
};

export async function getMovementData() {
	try {
		const response = await axios.get(API_URL);
		if (response.data === '') response.data = null;
		return response.data;
	} catch (e) {
		console.warn(e);
	}
}
