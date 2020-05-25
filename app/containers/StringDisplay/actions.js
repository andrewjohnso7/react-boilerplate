import { FETCH_STRINGS } from './constants';
export const fetchStrings = () => dispatch => {
  fetch(`api/getStrings`)
    .then(res => res.json())
    .then(strings =>
      dispatch({
        type: FETCH_STRINGS,
        payload: strings,
      }),
    )
    .then(console.log('We made it'))
    .catch(error => console.log('Something Broke ', error));
};
