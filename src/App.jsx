import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from "./components/NavBar";

import Drawer from './components/Drawer/index.';
import Footer from './components/Footer/Footer';
import PageCards from './routes/PageCards';

import PageHome from './routes/PageHome';
import PageIconButtons from './routes/PageiconButtons';
import PageButtons from './routes/PageButtons';

function App() {  

  const navLinks = [
    {name: "Home", route: "/"},
    {name: "Buttons", route: "/page_buttons"},
    {name: "Icon Buttons", route: "/page_icon_buttons"},
    {name: "Cards", route: "/page_cards"},
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
            <Route path="page_cards" element={<PageCards />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
