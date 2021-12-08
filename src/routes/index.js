import React from 'react';
import  { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from '../Pages/Home'
import User from '../Pages/User'

export default function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<User/>} />
    </Routes>
  </BrowserRouter>
  );
}
