import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from "./components/NavBar";

import Drawer from './components/Drawer/index.';
import Footer from './components/Footer/Footer';
import PageCards from './routes/PageCards';

import PageHome from './routes/PageHome';
import PageComponentBasics from './routes/PageComponentsBasics';
import PageCarts from './routes/PageCarts';

function App() {  

  const navLinks = [
    {name: "Home", route: "/"},
    {name: "Components Basics", route: "/components_basics"},
    // {name: "Components Cards", route: "#"},
    {name: "Cards", route: "/page_cards"},
    {name: "Carts", route: "/page_carts"},
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
            <Route path="components_basics" element={<PageComponentBasics />} />
            <Route path="page_cards" element={<PageCards />} />
            <Route path="page_carts" element={<PageCarts />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
