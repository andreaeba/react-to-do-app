import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import './App.css'
// import { Menu } from './components/Common';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<div>Login</div>}/>
        <Route path='/tasks' element={<div>Tasks</div>} />
        <Route path='/users' element={<div>Users</div>} />
        <Route path='/categories' element={<div>Categories</div>} />
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
