export const fetchStrings = () =>
  fetch(`api/getStrings`)
    .then(res => res.json())
    .catch(error => console.log('Something Broke ', error));

export const updateStrings = post =>
  fetch(`/api/addString`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .catch(error => console.log('We Broke it again: ', error));
