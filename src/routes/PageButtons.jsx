import Button from "../components/Button";

const PageButtons = () => {
    return (
        <main>
          <div className="hero-container">
            <article className="article-container">
              <h1 className="headline1">Page Buttons</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi hic mollitia atque soluta dicta laborum corrupti magnam quasi asperiores voluptate qui quibusdam placeat consectetur nisi ea, eaque odio nobis!</p>
              <h2>Text Button</h2>
              <Button
                name="Favorite"
                type="btn--text"
                handleClick={()=> console.log("Click")}
              />
              <h2>Refiled Button</h2>
              <Button
                name="Favorite"
                type="btn--refilled"
                handleClick={()=> console.log("Click")}
              />
              <h2>Outlined Button</h2>
              <Button
                name="Favorite"
                type="btn--outlined"
                handleClick={()=> console.log("Click")}
              />
            </article>
          </div>
        </main>
    );
}
 
export default PageButtons;