import { RECEIVE_ALL_BENCHES } from '../actions/bench_actions';
import { merge } from 'lodash';

function benchesReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_BENCHES:
      return merge({}, state, action.benches);
    default:
      return state;
  }
}

export default benchesReducer;
