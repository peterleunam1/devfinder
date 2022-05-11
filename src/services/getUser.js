import  { URL_BASE } from '../utils/baseUrls.js';

export default function getUser({keyword}) {
 
  const apiUrl = `${URL_BASE}/users/${keyword}`;

  return fetch(apiUrl)
    .then((resp) => {
      if(resp.status !== 200){
        // Stop the runtime from throwing an error
        throw new Error('User not found');
      }
      else {
        return resp.json();
      }
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      return {error}
    });
}
