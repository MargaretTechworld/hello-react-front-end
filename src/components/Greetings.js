import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const { loading, error, greetings } = useSelector((state) => state.greetings);
  return (
    <div>
      {loading && <p className="loading">Loading, please wait!</p>}
      {error && <p className="loading">Error loading data, please try again!</p>}
      <h1>{greetings.greetings}</h1>
    </div>
  );
}

export default Greetings;
