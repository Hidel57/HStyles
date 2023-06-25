
import './nav_bar.css'
import IconButton from '../IconButton'
import logo from '../../logo.png'
import Button from '../Button'
import LinkTest from '../Link'

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
              className=''
            >
              <img
                className='navbar__logo'
                src={logo}
                alt='App logo'
                width={40}
                height={40}
              />

              </a>
              <a 
              href="/"
              className='link'
            >
              <h1 style={{color: "var(--color-primary)", paddingLeft: "4px", fontSize: "1.25em"}}>Styles</h1>
              </a>
          </div>
          <div className="navbar-section navbar-section--mobile-hide">
            {navLinks.map(link => (
              <li className='nav-item' key={link.name}>
                <LinkTest
                  route={link.route}
                  name={link.name}
                  handleClick={() => console.log('click')}
                />
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
            <Button
                name="Sign in"
                type="btn--refilled"
                handleClick={()=> console.log("Click")}
              />
          </div>
        </div>
    </nav>
  )
}
