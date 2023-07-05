import ComponentCart from "../components/CompoentCart";

const PageCarts = () => {
    const ShopingCart = [
        {name: "Producto Item 1", description:"Lorem insut var oconsro sokdekte prise", precie: "125"},
        {name: "Producto Item 2", description:"Lorem insut var oconsro sokdekte prise", precie: "90"},
        {name: "Producto Item 3", description:"Lorem insut var oconsro sokdekte prise", precie: "250"},
    ]
    return (
        <main className="content-container">
            <div className="hero-container">
                <div className="block">
                    <div className="chunk">
                        <h1 className="headline1">Carts</h1>
                        <p className="text-body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatibus ullam voluptatem perspiciatis soluta et quis? Nesciunt quo earum saepe placeat quia similique? Culpa id voluptatem odio sint laborum dolores.</p>
                    </div>
                    <div className="chunk">
                        <ComponentCart
                            data= {ShopingCart}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default PageCarts;
