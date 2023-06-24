import './nav_bar.css'
// import Drawer from '../drawer'
import { useState } from 'react'
import IconButton from '../icon_button'

export default function NavBar() {
  const navLinks = [
    {name: "NavLink1", route: "#"},
    {name: "NavLink2", route: "#"},
    {name: "NavLink3", route: "#"},
    {name: "NavLink4", route: "#"},
    {name: "NavLink5", route: "#"},
  ]

  const [showModal, setshowModal] = useState(false)

  return (
    <>
      <nav className="navbar navbar--shadow-button">
          <div className='navbar-container'>
            <div className="navbar-section navbar-section--desktop-hide">
              <IconButton
                  name= 'menu'
                  handleClick={setshowModal}
                />
            </div>
            <div className='navbar-section'>
              <a 
                href="/"
                className='link'
              >
                <img
                  className='navbar__logo'
                  src={'/logo12.png'}
                  alt='App logo'
                  width={40}
                  height={40}
                />

                </a>
                <a 
                href="/"
                className='link'
              >
                <h1 style={{color: "#7c59fe", paddingLeft: "4px", fontSize: "1.25em"}}>CompraNET</h1>
                </a>
            </div>
            <div className="navbar-section navbar-section--mobile-hide">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.route} className='nav-item link'>{link.name}</a>
                  </li>
                ))}

            </div>
            <div className="navbar-section navbar-section--desktop-hide">
              <IconButton
                name= 'shopping_cart'
                handleClick={() => console.log("click")}
              />
              <IconButton
                name= 'face'
                handleClick={() => console.log("click")}
              />
            </div>
            <div className="navbar-section navbar-section--mobile-hide">
              <button className="btn btn--refilled">
                Sing Up
              </button>
            </div>
          </div>
      </nav>

      {/* <Drawer
        showModal={showModal}
        setshowModal={setshowModal}
        navLinks={navLinks}
       /> */}
    </>
  )
}
