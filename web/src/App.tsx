import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import CommentView from './features/Comment/Comment';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from 'features/Home/Home';
import StorageKeys from 'constants/storage-keys';
import {CurrentUser} from './types/auth.type'
import { authSelector } from 'features/Auth/authencationSlice';
import { useAppSelector } from 'app/hook';



function App() {

  const [user, setUser] = useState();
  const { currentUser } = useAppSelector(authSelector);
  useEffect(() => {
    const bbbbb = localStorage.getItem(StorageKeys.user);
    if (bbbbb) {
      const userJson = (JSON.parse(bbbbb));
      setUser(userJson);
    }
  }, [StorageKeys.user]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          {!user
            ? <Route path="/login" element={<Login />} />
            : <Route path='/home' element= {<Home propss = {currentUser}  />} />
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
