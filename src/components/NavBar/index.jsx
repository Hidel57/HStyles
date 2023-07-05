
import './nav_bar.css'
import IconButton from '../IconButton'
import Button from '../Button'
import LinkTest from '../Link'
import ToggleDarkMode from '../ToggleDarkMode'

export default function NavBar(props) {

  const {logo, navLinks, setshowModal} = props
  
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
              className='navbar__logo'
            >
              <img
                src={logo}
                alt='App logo'
                width={40}
                height={40}
              />
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
            <ToggleDarkMode />
            <Button
                name="Sign in"
                variant="btn--contained"
                onClick={()=> console.log("click")}
              />
          </div>
        </div>
    </nav>
  )
}
