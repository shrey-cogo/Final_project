import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
// import Article from './pages/Article/indexArticle';
// import Home from './pages/Home/indexHome';

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route index element={<Home />} /> */}
      <Route path="article" element={<Articles/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App