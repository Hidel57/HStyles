import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import logo from './logo.svg'
import NavBar from "./components/NavBar";
import Drawer from './components/Drawer/index.';
import Footer from './components/Footer';

import PageHome from './routes/PageHome';
import PageColors from './routes/PageColors';
import PageTypography from './routes/PageTypography';
import PageCards from './routes/PageCards';
import PageButtons from './routes/PageButtons';
import PageCarts from './routes/PageCarts';
import PageBanners from './routes/PageBanners';
import PageProduct from './routes/PageProduct';
import PageLayouts from './routes/PageLayouts';
function App() {  

  const info =[
    { title: "title 1",
      items: ["item 1","item 2","item 3","item 4","item 5"]
    },
    { title: "title 2",
      items: ["item 1","item 2","item 3","item 4","item 5"]
    },
    { title: "title 3",
      items: ["item 1","item 2","item 3","item 4","item 5"]
    },
    { title: "title 4",
      items: ["item 1","item 2","item 3","item 4","item 5"]
    }
  ]

  const navLinks = [
    {name: "Home", route: "/"},
    {name: "Colors", route: "/colors"},
    {name: "Layouts", route: "/layouts"},
    {name: "Typography", route: "/typography"},
    {name: "Buttons", route: "/page_buttons"},
    {name: "Cards", route: "/page_cards"},
    {name: "Carts", route: "/page_carts"},
    {name: "Banners", route: "/page_banners"},
    {name: "Product", route: "/page_product"},
  ]

  const [showModal, setshowModal] = useState(false)
  return (
    <div className="App">
      <NavBar
        logo={logo}
        navLinks={navLinks}
        setshowModal={setshowModal}
      />
      <div className='body body--drawer'>
        <div className="content-drawer">
          <Drawer
            showModal={showModal}
            navLinks={navLinks}
            setshowModal={setshowModal}
          />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/layouts" element={<PageLayouts />} />
            <Route path="/colors" element={<PageColors />} />
            <Route path="/typography" element={<PageTypography />} />
            <Route path="/page_buttons" element={<PageButtons />} />
            <Route path="/page_cards" element={<PageCards />} />
            <Route path="/page_carts" element={<PageCarts />} />
            <Route path="/page_banners" element={<PageBanners />} />
            <Route path="/page_product" element={<PageProduct />} />
          </Routes>
          <Footer info={info}/>
        </div>
      </div>
    </div>
  );
}

export default App;
