import { useState } from 'react';

import Button from '../Button'
import Quantity from '../Quantity';
import './product.css'

const Product = () => {
    const [count, setCount] = useState(1);
    return (
        <div className='product row'>
            <div className="col-md-6">
                <div className="product-media">
                    <img 
                    src="https://dummyimage.com/500x500/777777/ffffff&text=Product"
                    alt='product imagen' 
                    className='product-img'
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-info">
                    <h1 className="headline1">Product Title</h1>
                    <h2 className="headline5">Product Subtitle</h2>
                    <p className="text-body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga ullam sunt numquam recusandae itaque error nisi rerum perferendis. Veniam eligendi illum dicta minus non officia odio facere ut magni?</p>
                    <Quantity
                        count = {count}
                        setCount={setCount}
                    />
                    <Button
                        name = "Add to Cart"
                        icon = "shopping_cart"
                        variant = "btn--contained btn--full"
                        onClick = {console.log('click')}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Product;