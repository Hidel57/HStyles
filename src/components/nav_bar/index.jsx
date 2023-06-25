import './nav_bar.css'
import '../button/button.css'
import IconButton from '../icon_button'
import { Link } from 'react-router-dom'

export default function NavBar({navLinks, setshowModal}) {
  
  const handleClick = () => {
    setshowModal(true)
  }

  return (
    <nav className="navbar navbar--shadow-button">
        <div className='navbar-container'>
          <div className="navbar-section navbar-section--desktop-hide">
            <IconButton
                name= 'menu'
                handleClick={handleClick}
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
              <h1 style={{color: "var(--color-primary)", paddingLeft: "4px", fontSize: "1.25em"}}>CompraNET</h1>
              </a>
          </div>
          <div className="navbar-section navbar-section--mobile-hide">
                {navLinks.map(link => (
                  <li 
                    key={link.name}
                    className='nav-item'
                  >
                    <Link to={link.route}>{link.name}</Link>
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
  )
}
