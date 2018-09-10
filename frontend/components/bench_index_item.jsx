import React from 'react';

const BenchIndexItem = (props) => {
  return (
    <li>
      <p>{props.bench.description}</p>
      <h5>Coordinates: {props.bench.lat}, {props.bench.lng}</h5>
    </li>
  );
};

export default BenchIndexItem;
