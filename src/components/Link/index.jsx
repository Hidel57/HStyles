import { NavLink } from "react-router-dom";
import './link.css'

const LinkTest = (props) => {
    const {name, route, handleClick} = props
    return (
        <NavLink
            to={route}
            onClick={handleClick}
            className={({isActive, isPending}) => 
              isActive ? "link active" : isPending ? "pending": "link"
           }
        >
            {name}
        </NavLink>
    );
}
 
export default LinkTest;