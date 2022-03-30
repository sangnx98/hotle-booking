import React, {useState} from 'react';
import Home from './page/Home';
import Login from './page/Login'
import Signup from './page/Signup';
import { Routes, Route, BrowserRouter, Navigate, } from "react-router-dom";
import Rooms from './page/Rooms';
import RoomDetail from './page/RoomDetail';
import Host from './page/Host';
import NewHomeStay from './page/NewHomeStay';
import UserProfile from './page/UserProfile';
// import Header from './components/Header/Header';
import Layout from './page/Layout';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Navigate to='/home' replace/>}/>
            <Route path='/home/*' element={<Layout/>}>
              <Route path="" element={<Home />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/:id" element={<RoomDetail />} />
            </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/host" element={<Host />} />
          <Route path="/newhomestay" element={<NewHomeStay />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
