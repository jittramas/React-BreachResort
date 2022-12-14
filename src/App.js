import React from'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import {Route, Routes,} from "react-router-dom"


function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/room/:slug" element={<SingleRoom />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
