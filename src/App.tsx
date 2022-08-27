import React from 'react';
// import { Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
