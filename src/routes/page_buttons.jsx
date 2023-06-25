import Button from "../components/button";

const PageButtons = () => {
    return (
        <main>
          <div className="hero-container">
            <article className="article-container">

              <h1 className="headline1">Page Buttons</h1>
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