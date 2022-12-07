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

export function axiosCreateManager(firstName, lastName, email, pw) {
  return axiosInstance
    .post('Managers', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: pw,
    })
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}

export function axiosCreateModel(
  firstName,
  lastName,
  email,
  phone,
  address1,
  address2,
  zip,
  city,
  country,
  birthDate,
  nationality,
  height,
  showSize,
  hairColor,
  eyeColor,
  comments,
  pw
) {
  return axiosInstance
    .post('Models', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phone,
      addressLine1: address1,
      addressLine2: address2,
      zip: zip,
      city: city,
      country: country,
      birthDate: birthDate,
      nationality: nationality,
      height: height,
      showSize: showSize,
      hairColor: hairColor,
      eyeColor: eyeColor,
      comments: comments,
      password: pw,
    })
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}

export function axiosCreateJob(customer, startDate, days, location, comments) {
  return axiosInstance
    .post('Jobs', {
      customer: customer,
      startDate: startDate,
      days: days,
      location: location,
      comments: comments,
    })
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}

export function axiosAddModelToJob(modelID, jobID) {
  return axiosInstance
    .post(`Jobs/${jobID}/model/${modelID}`, {
      modelId: modelID,
      jobId: jobID,
    })
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}

export function axiosCreateExpense(modelId, jobId, date, text, amount) {
  return axiosInstance
    .post('Jobs', {
      modelId: modelId,
      jobId: jobId,
      date: date,
      text: text,
      amount: amount,
    })
    .then((resp) => {
      return resp;
    })
    .catch(console.error);
}
