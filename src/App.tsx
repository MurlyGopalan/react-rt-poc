import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useVesselsQuery } from './services/api';
import { Provider, useDispatch } from 'react-redux';
import { Tracking } from './features/Tracking';
import { Forecast } from './features/Forecast';


import { store } from './store';
import { MainRoutes } from './MainRoutes';

function App() {

  
  return (  
    <Provider store={store}>
       <MainRoutes/>
    </Provider>
  );
}

export default App;
