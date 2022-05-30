import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import CommentView from './features/Comment/Comment';

function App() {
  return (
    <>
    {/* <Dashboard /> */}
      <Header />
      <CommentView />
      <Footer></Footer>
    </>
  );
}

export default App;
