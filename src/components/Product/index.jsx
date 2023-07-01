import './product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="product-media">
                <img 
                src="https://media.istockphoto.com/id/855535872/photo/webdesigner-sketching-responsive-website-wireframe-with-laptop-smartphone-and-tablet.jpg?s=612x612&w=0&k=20&c=3TOuMdg5E4YzR8SzJf_TihoKApOyle8dLv3xIFGPfbE="
                alt='product imagen' 
                className='product-img'
                />
            </div>
            <div className="product-information">
                <h1 className="name">Product</h1>
            </div>

        </div>
    );
}
 
export default Product;