import './button.css'

const Button = (props) => {
    const {name, icon, variant, onClick} = props
    return (
        <button
          className= {`btn ${variant}`}
          onClick={onClick}
        >
            {icon ? <span className="btn__icon material-icons">{icon}</span> : null}
            {name}
        </button>
    );
}
 
export default Button;