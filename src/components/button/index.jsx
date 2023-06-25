import './button.css'

const Button = (props) => { 
    return (
        <button
          className= {`btn ${props.type}`}
          onClick={props.handleClick}
        >
            {props.name}
        </button>
    );
}
 
export default Button;