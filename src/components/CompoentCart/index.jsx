import './cart.css'
import IconButton from '../IconButton'
import Button from '../Button'

const ComponentCart = ({data}) => {
    return (
    <div className="cart">
        <div className="cart-container">
            <header className='cart__header'>
                <h2 className='headline4'>Your Shopping Cart</h2>
                <IconButton name="close" />
            </header>
            <div className="cart__body">
            {data.map( item =>
                <div className="cart-item" key={item.name}>
                    <div className="cart-item__img">
                        <img
                            src="https://dummyimage.com/100x130/777777/ffffff&text=Product"
                            alt="img cart"
                        />
                    </div>
                    <div>
                        <div className="cart-item__info">
                            <div className="headline5">{item.name}</div>
                            <div className="subtitle1">{item.precie} $</div>
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
                    <p className="headline4">Price Total: Bs 450</p>
                </div>
                <Button
                    name = "Continue to Check out"
                    variant = "btn--contained btn--full"
                    handleClick = {() => console.log('click')}
                />
                <Button
                    name = "back to shopping"
                    variant = "btn--text btn--full"
                    handleClick = {() => console.log('click')}
                />
            </footer>
        </div>
    </div>
    );
}
 
export default ComponentCart;