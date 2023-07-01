import Button from "../components/Button";
import IconButton from "../components/IconButton";

const PageButtons = () => {
    return (
        <main className="main-container">
          <div className="main-content">
            <div className="hero-container">
              <article className="article-container">
                <div className="block">
                  <h1 className="headline1">Buttons</h1>
                </div>
                <div className="block">
                  <p className="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi hic mollitia atque soluta dicta laborum corrupti magnam quasi asperiores voluptate qui quibusdam placeat consectetur nisi ea, eaque odio nobis!</p>
                </div>
              </article>
              <article className="article-container">
                <article className="article-section">
                  <div className="block">
                    <div className="headline2">Demos</div>
                  </div>
                  <div className="block">
                    <div className="chunk">
                      <h3 className="headline3">Text Button</h3>
                      <Button
                        name = "Favorite"
                        variant = "btn--text"
                        onClick = {()=> console.log("Click")}
                      />
                      <Button
                        name = "Favorite"
                        icon = "favorite"
                        variant = "btn--text"
                        onClick = {()=> console.log("Click")}
                      />
                    </div>
                    <div className = "chunk">
                      <h3 className = "headline3">Refilled Button</h3>
                      <Button
                        name="Favorite"
                        variant="btn--refilled"
                        onClick={()=> console.log("Click")}
                      />
                      <Button
                        name = "Favorite"
                        icon = "favorite"
                        variant = "btn--refilled"
                        onClick = {()=> console.log("Click")}
                      />
                    </div>
                    <div className="chunk">
                      <h3 className="headline3">Outlined Button</h3>
                      <Button
                        name="Favorite"
                        variant="btn--outlined"
                        onClick={()=> console.log("Click")}
                      />
                      <Button
                        name="Favorite"
                        icon = "favorite"
                        variant="btn--outlined"
                        onClick={()=> console.log("Click")}
                      />
                    </div>
                    <div className="chunk">
                      <h3 className="headline3">Icons Buttons</h3>
                      <IconButton
                          name= 'menu'
                          onClick={() => console.log('click')}
                      />
                    </div>
                  </div>
              </article>
            </article>
          </div>
        </div>
      </main>
    );
}
 
export default PageButtons;
