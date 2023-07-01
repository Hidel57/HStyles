import './cart.css'
import IconButton from '../IconButton'
import Button from '../Button'

const ComponentCart = (props) => {
    return (
    <div className="cart">
        <div className="cart-container">
            <header className='cart__header'>
                <h2 className='cart_title'>Your Shopping Cart</h2>
                <IconButton name="close" />
            </header>
            <div className="cart__body">
            {props.data.map( item => 
                <div className="cart-item" key={item.name}>
                    <div className="cart-item__img">
                        <img
                            src="https://dummyimage.com/100x120/777777/555555&text=Image"
                            alt="img cart"
                        />
                    </div>
                    <div>
                        <div className="cart-item__info">
                            <div className="cart__title">{item.name}</div>
                            <div className="cart__description">{item.description}</div>
                            <div className="cart__description">{item.precie}</div>
                        </div>
                        <div className="cart-item__actions">
                            <IconButton name="delete" />
                        </div>
                    </div>
                </div>
            )}
            </div>
            <footer className='cart__footer'>
                <div className="cart__price">
                    Price Total: Bs 450
                </div>
                <Button
                    name = "Shopping Products"
                    variant = "btn--refilled btn--full"
                    handleClick = {() => console.log('click')}
                />
                <Button
                    name = "Continue to Check out"
                    variant = "btn--text btn--full"
                    handleClick = {() => console.log('click')}
                />
            </footer>
        </div>
    </div>
    );
}
 
export default ComponentCart;