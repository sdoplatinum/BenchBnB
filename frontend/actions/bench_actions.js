import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";

export const receiveAllBenches = (benches) => {
  return ({
    type: RECEIVE_ALL_BENCHES,
    benches: benches
  });
};

export const fetchBenches = () => {
  return (dispatch) => {
    return BenchApiUtil.fetchBenches().then((benches) => {
      dispatch(receiveAllBenches(benches));
    });
  };
};
