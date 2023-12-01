import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const { loading, error, greetings } = useSelector((state) => state.greetings);
  return (
    <div className="App">
      {loading && <p className="loading">Loading, please wait!</p>}
      {error && <p className="loading">Error loading data, please try again!</p>}
      <h1>Greetings</h1>
      <h3>{greetings.greetings}</h3>
    </div>
  );
}

export default Greetings;
