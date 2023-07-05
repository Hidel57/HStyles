import './quantity.css'

const Quantity = ({count, setCount}) => {
    return (
        <div className="quantity">
            <button 
                className="quantity__btn"
                disabled = {count <= 1 ? true : false }
                onClick= {()=> setCount(count - 1)}
                >
                <span className="material-icons">remove</span>
            </button>
            <p className="quantity__label">{count}</p>
            <button 
                className="quantity__btn"
                onClick= {()=> setCount(count + 1)}
                >
                <span className="material-icons">add</span>
            </button>
        </div>
    );
}
 
export default Quantity;