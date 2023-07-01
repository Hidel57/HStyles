import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from "./components/NavBar";

import Drawer from './components/Drawer/index.';
import Footer from './components/Footer/Footer';

import PageCards from './routes/PageCards';
import PageHome from './routes/PageHome';
import PageTypography from './routes/PageTypography';
import PageButtons from './routes/PageButtons';
import PageCarts from './routes/PageCarts';
import PageDrawers from './routes/PageDrawers';
import PageProduct from './routes/PageProduct';
function App() {  

  const info =[
    { title: "title 1",
      items: ["item 1","item 2","item 3","item 4","item 5","item 6"]
    },
    { title: "title 2",
      items: ["item 1","item 2","item 3","item 4","item 5","item 6"]
    },
    { title: "title 3",
      items: ["item 1","item 2","item 3","item 4","item 5","item 6"]
    },
    { title: "title 4",
      items: ["item 1","item 2","item 3","item 4","item 5","item 6"]
    }
  ]

  const navLinks = [
    {name: "Home", route: "/"},
    {name: "Typography", route: "/typography"},
    {name: "Buttons", route: "/page_buttons"},
    {name: "Cards", route: "/page_cards"},
    {name: "Carts", route: "/page_carts"},
    {name: "Drawers", route: "/page_drawers"},
    {name: "Product", route: "/page_product"},
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
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/typography" element={<PageTypography />} />
            <Route path="page_buttons" element={<PageButtons />} />
            <Route path="page_cards" element={<PageCards />} />
            <Route path="page_carts" element={<PageCarts />} />
            <Route path="page_drawers" element={<PageDrawers />} />
            <Route path="page_product" element={<PageProduct />} />
          </Routes>
          <Footer info={info}/>
        </div>
      </div>
    </div>
  );
}

export default App;
