import axios from 'axios';

const config = {
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('jwt'),
	},
};

const axiosInstance = axios.create({
	baseURL: 'https://localhost:7181/api/',
});

export function axiosLogin(email, pw) {
	return axiosInstance
		.post('Account/login', { email: email, password: pw })
		.then((resp) => {
			return resp;
		})
		.catch(console.error);
}
