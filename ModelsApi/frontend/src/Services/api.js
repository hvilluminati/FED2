// const config = {
//     headers: {
//       Authorization: 'Bearer ' + localStorage.getItem('jwt'),
//     },
//   };

// let api_base_url = '';

// export function setBaseUrl(baseUrl) {
//   api_base_url = baseUrl;
// }

// export async function postData(endpoint, body, customConfig = {}) {
//     const config = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       ...customConfig,
//       credentials: 'include',
//       headers: {
//         'Authorization': 'Bearer ' + localStorage.getItem("token"),
//         'Content-Type': 'application/json',
//         ...customConfig.headers,
//       },
//     }
//     return doFetch(endpoint, config);
// }
