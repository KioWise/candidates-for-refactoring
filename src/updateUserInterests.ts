// const updateUserHandle = (handle) => {
//   if (!isLoggedIn()) {
//     toLoginPage();
//     return;
//   }

//   const token = getToken();
//   const headers = getHeaders(token);

//   return fetch(`${domain}/v1/users/handle`, {
//     method: 'PUT',
//     headers,
//     body: JSON.stringify({
//       handle,
//     }),
//   });
// };

// const updateUserInterests = (interestUUIDs) => {
//   if (!isLoggedIn()) {
//     toLoginPage();

//     return;
//   }

//   const token = getToken();
//   const headers = getHeaders(token);

//   return fetch(`${domain}/v1/users/interests`, {
//     method: 'PUT',
//     headers,
//     body: JSON.stringify({
//       interestUUIDs,
//     }),
//   });
// };



// Стоит сделать всё одной функцией, а не делать дубликаты кода - плохая практика
// Код стал проще и удобен для редактирования в будущем
const updateUser = <T>(domain: string, url: string, body: T) => {
  if (!isLoggedIn()) {
    toLoginPage();
    return;
  }

  const token = getToken();
  const headers = getHeaders(token);

  return fetch(`${domain}/${url}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      body,
    }),
  });
}