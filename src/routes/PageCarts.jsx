import ComponentCart from "../components/CompoentCart";

const PageCarts = () => {
    const ShopingCart = [
        {name: "Producto Item 1", description:"Lorem insut var oconsro sokdekte prise", precie: "125"},
        {name: "Producto Item 1", description:"Lorem insut var oconsro sokdekte prise", precie: "90"},
        {name: "Producto Item 1", description:"Lorem insut var oconsro sokdekte prise", precie: "250"},
    ]
    return (
        <main>
            <div className="hero-container">
                <article className="article-container">
                    <h1 className="headline1">Carts</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, voluptatibus ullam voluptatem perspiciatis soluta et quis? Nesciunt quo earum saepe placeat quia similique? Culpa id voluptatem odio sint laborum dolores.</p>
                    <ComponentCart
                        data= {ShopingCart}
                    />
                </article>
            </div>
        </main>
    );
}
 
export default PageCarts;
