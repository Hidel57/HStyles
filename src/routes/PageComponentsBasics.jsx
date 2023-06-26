import Button from "../components/Button";
import IconButton from "../components/IconButton";
import TextField from "../components/TextFild";

const PageComponentBasics = () => {
    return (
        <main>
          <div className="hero-container">
            <article className="article-container">
              <h1 className="headline1">Principal Componentes</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi hic mollitia atque soluta dicta laborum corrupti magnam quasi asperiores voluptate qui quibusdam placeat consectetur nisi ea, eaque odio nobis!</p>
            </article>
            <article className="article-container">
              <article className="article-section">
                <h2 className="headline1">Buttons</h2>
                <h3>Text Button</h3>
                <Button
                  name="Favorite"
                  type="btn--text"
                  handleClick={()=> console.log("Click")}
                />
                <h3>Refiled Button</h3>
                <Button
                  name="Favorite"
                  type="btn--refilled"
                  handleClick={()=> console.log("Click")}
                />
                <h3>Outlined Button</h3>
                <Button
                  name="Favorite"
                  type="btn--outlined"
                  handleClick={()=> console.log("Click")}
                />
              </article>

              <article className="article-section">
                <h2 className="headline1">Icons Buttons</h2>
                <h2>Icon Button Neutral</h2>
                <IconButton
                    name= 'menu'
                    handleClick={() => console.log('click')}
                />
              </article>

              <article className="article-section">
                <h2 className="headline1">Text Fields</h2>
                <h2>Outlined</h2>
                <TextField
                  name="name"
                  handleChange={()=>console.log('escuchando cambios')}
                />
              </article>
            </article>

          </div>
        </main>
    );
}
 
export default PageComponentBasics;