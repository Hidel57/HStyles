import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css'
import NavBar from "./components/nav_bar";
import Drawer from './components/drawer/index.';
import PageButtons from './routes/page_buttons';
import PageIconButtons from './routes/page_icon_buttons';
import PageHome from './routes/PageHome';
import Footer from './components/Footer/Footer';

function App() {  

  const navLinks = [
    {name: "Home", route: "/"},
    {name: "Buttons", route: "/page_buttons"},
    {name: "Icon Buttons", route: "/page_icon_buttons"},
  ]

  const [showModal, setshowModal] = useState(false)
  return (
    <div className="App">
      <NavBar
        navLinks={navLinks}
        setshowModal={setshowModal}
      />
      <div className='body-container'>
        <Drawer
          showModal={showModal}
          navLinks={navLinks}
          setshowModal={setshowModal}
        />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="page_buttons" element={<PageButtons />} />
            <Route path="page_icon_buttons" element={<PageIconButtons />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
