import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import App from './App';
import { Login } from './pages/Home';
import { ContainerWrapper } from './components/Common/MainContainer';
import { AddUser } from './pages/AddUser'
import { SignUp } from './pages/SignUp';
import { Users } from './pages/Users';
import { SaveUser } from './pages/SaveUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ContainerWrapper>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />  
            <Route path="signup" element={<SignUp />} />
          </Route>

           <Route path='/users' element={<Outlet />}>
              <Route index element={<Users />} />
              <Route path='save' element={<SaveUser />} />
              <Route path='save/:id' element={<SaveUser />} />
              <Route path='details' element={<div>Details user</div>} />
              <Route path='details/:id' element={<SaveUser />} />
              <Route path='delete' element={<div>Delete user</div>} />
              <Route path='delete/:id' element={<div>Delete user</div>} />
           </Route>

           <Route path='/categories' element={<Outlet />}>
              <Route path='add' element={<div>Add categorie</div>} />
              <Route path='edit' element={<div>Edit categorie</div>} />
              <Route path='details' element={<div>Details categorie</div>} />
              <Route path='delete' element={<div>Delete categorie</div>} />
           </Route>

        </Routes>
    </ContainerWrapper>
  </BrowserRouter>
);
