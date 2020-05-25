import { createSelector } from 'reselect';

// selector
const stateStrings = state => state.strings;
// reselect function
export const getSelectorStrings = createSelector(
  [stateStrings],
  state => state,
);

/*
In Redux, whenever an action is called anywhere in the application, all mounted & connected components call their mapStateToProps function. This is why Reselect is awesome. It will just return the memoized result if nothing has changed.
*/
