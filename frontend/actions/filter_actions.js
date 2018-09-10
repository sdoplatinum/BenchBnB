import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


// export const updateBounds = (bounds) => {
//   return ({
//     type: UPDATE_BOUNDS,
//     bounds: bounds
//   });
// };

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_BOUNDS,
      bounds: bounds
    });
    return dispatch(fetchBenches(getState().filters.bounds));
  };
};
