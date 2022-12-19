import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import UserDetail from "./components/UserDetail";
import { useEffect, useState } from "react";
import Auth from "./components/Auth"

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
          <Auth>
            <Home />
          </Auth>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userdetail/:username" element={<UserDetail />} />
        

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
