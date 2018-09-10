import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount () {
  //   this.props.fetchBenches();
  // }

  render () {
    if (this.props.benches) {
      return (
        <ul>
          {
            Object.values(this.props.benches).map((bench, idx) => {
              return <BenchIndexItem bench={bench} key={idx}/>;
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}

export default BenchIndex;
