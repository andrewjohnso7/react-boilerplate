export const fetchStrings = () =>
  fetch(`api/getStrings`)
    .then(res => res.json())
    .then(data => console.log('give this to the reducer', data))
    .catch(error => console.log('Something Broke ', error));
