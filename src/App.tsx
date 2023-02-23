import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useVesselsQuery } from './services/api';

function App() {
  const {data, error, isLoading, isFetching, isSuccess} = useVesselsQuery();
  return (
    <div className="App">
      <h1>React RTK Demo</h1>
      {isLoading && <h2>Loading ... </h2>}
      {error && <h2>Error ...</h2> }
      {isFetching && <h2>Is Fetching ..</h2>}
      {isSuccess && (
          <div>
             {data?.map(vessel => {
                return <div className = "data" key={vessel.id}>
                          <span>{vessel.name}</span>
                        </div>
             })} 
          </div>
      )}
    </div>
  );
}

export default App;
