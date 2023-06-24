import './button.css'

const Button = (props) => { 
    return (
        <button
          className= {`btn ${props.type}`}
        >
            favorite
        </button>
    );
}
 
export default Button;