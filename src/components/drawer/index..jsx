import { Link } from 'react-router-dom'
import IconButton from '../icon_button'
import './drawer.css'

export const Drawer = ({showModal, setshowModal, navLinks})  => {

  const handleClick = () => {
    setshowModal(false)
  }

  return (
    <div className='drawer-root'>
      <aside className='drawer drawer--modal drawer--shadow-right' 
        style={showModal? {transform: "translateX(0px)", transition: "transform 250ms cubic-bezier(0,0,.38,.9)", zIndex:"10"}: {}}
      >
        <div className="drawer__header">
          <IconButton
            name="close"
            className="icon-btn"
            handleClick={handleClick}
          />
        </div>
        <div className="drawer__content">
          <nav>
              <ul>
                  {navLinks.map(link => (
                    <li className='drawer__item' key={link.name}>
                      <Link to={link.route} onClick={handleClick}>{link.name}</Link>
                  </li>
                  ))}
              </ul>
          </nav>
        </div>
      </aside>
      <div className='drawer-scrim'
        style={showModal ? {display: "flex"} : {} }
        >
      </div>
    </div>
  )
}

export default Drawer