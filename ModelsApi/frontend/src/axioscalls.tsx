import axios from 'axios';

const config = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  },
};

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7181/api/',
});

export function axiosLogin(email: string, pw: string) {
  axiosInstance
    .post(email, pw)
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}
