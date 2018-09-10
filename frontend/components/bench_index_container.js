import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const msp = state => {
  return {
    benches: state.entities.benches,
  };
};

const mdp = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
  };
};

export default connect (msp, mdp)(BenchIndex);
