import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://food-explorer-backend-ujlg.onrender.com',
})
