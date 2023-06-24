import './icon-btn.css'

const IconButton = ({name, handleClick}) => {
  return (
    <button 
      className="icon-btn"
      onClick= {()=> handleClick(true)}
    >
      <span className="material-icons">{name}</span>
    </button>  )
}

export default IconButton
