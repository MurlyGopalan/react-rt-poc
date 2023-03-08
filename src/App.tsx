import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useVesselsQuery } from './services/api';
import { useDispatch } from 'react-redux';
import { Tracking } from './features/Tracking';
import { Forecast } from './features/Forecast';


function App() {

  const [tabSelected, setTabSelected] = useState<string>("Tracking");
  useEffect(() => {
    setTabSelected("Tracking");
  },[])
  
  const navButtons = [
    "Tracking",
    "Forecast"
  ];

  return (
    <div className="App">
      <h1>React RTK Demo</h1>

      <div className="tabHeaderDiv">
            {navButtons.map((button, index) => (
        
              <button className="button-basic" key={index} onClick={() => {
                setTabSelected(button);
              }}>{button}</button> ))
            }
      </div>
      <div className="featureDiv">
            {tabSelected === "Tracking" && 
              <Tracking/>
            }

            {tabSelected === "Forecast" && 
              <Forecast />
            }
      </div>
    </div>
  );
}

export default App;
