import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, fetchBenches, updateBounds}) => {
  debugger
  return (
    <div>
      <BenchMap benches={benches} updateBounds={updateBounds} fetchBenches={fetchBenches}/>
      <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
    </div>
  );
};

export default Search;
