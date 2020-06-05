export const fetchStrings = () =>
  fetch(`api/getStrings`)
    .then(res => res.json())
    .catch(error => `Oops ${error}`);

export const updateStrings = post =>
  fetch(`/api/addString`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .catch(error => error);
