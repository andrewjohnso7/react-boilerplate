import { FETCH_STRINGS, UPDATING_STRINGS } from './constants';
/* Defining mapDispatchToProps as An Object: 
  https://react-redux.js.org/6.x/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
*/

// This action is designated to fetch all strings located on the server
export const fetchStrings = () => ({ type: FETCH_STRINGS });

// This action is designated to update the strings located on the server, with the payload given
export const addString = payload => ({
  type: UPDATING_STRINGS,
  payload,
});
