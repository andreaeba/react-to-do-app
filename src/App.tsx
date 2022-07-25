import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Common';
import { Login } from './pages/Login'
import { Home } from './pages/Home';
import { NewUser } from './pages/NewUser'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ContainerWrapper } from './components/Common/MainContainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ContainerWrapper>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tasks' element={<div>Tasks</div>} />
          <Route path='/users' element={<NewUser/>} />
          <Route path='/categories' element={<div>Categories</div>} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
        </ContainerWrapper>
      </BrowserRouter>


    </>
  );
}

export default App;
