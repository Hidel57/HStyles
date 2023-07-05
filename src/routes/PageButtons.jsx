import Button from "../components/Button";
import Highlight from "../components/Highlight";
import IconButton from "../components/IconButton";

const codeBtnText = `<Button
  name = "Favorite"
  icon = "favorite" //optional
  variant = "btn--text"
  onClick = {()=> console.log("Click")}
/>`
const codeBtnOutlined = `<Button
  name = "Favorite"
  icon = "favorite" //optional
  variant = "btn--outlined"
  onClick = {()=> console.log("Click")}
/>`
const codeBtnContained = `<Button
  name = "Favorite"
  icon = "favorite" //optional
  variant = "btn--contained"
  onClick = {()=> console.log("Click")}
/>`
const codeBtnIcon = `<IconButton
  name= 'menu'
  onClick={() => console.log('click')}
/>`

const PageButtons = () => {
    return (
        <main className="content-container container">
          <div className="block">
            <h1 className="headline1">Buttons</h1>
            <p className="text-body1">Los botones permiten a los usuarios realizar acciones y elegir con un solo toque.</p>
            <p className="text-body1">Hay cuatro tipos de botones:</p>
            <ul>
              <li>1. Text Button</li>
              <li>2. Outlined Button</li>
              <li>3. Contained Button</li>
              <li>4. Icon Button</li>
            </ul>
          </div>
                
          <div className="block">
            <div className="chunk">
              <h2 className="headline2">Text Button</h2>
              <p className="text-body1">Los botones de texto generalmente se usan para acciones menos pronunciadas, incluidas las ubicadas en cuadros de diálogo y tarjetas. En las tarjetas, los botones de texto ayudan a mantener el énfasis en el contenido de la tarjeta.</p>
            </div>
            <div className="chunk">
              <h3 className="headline3">Demo</h3>
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
            <div className="chunk">
              <h3 className="headline3">Code</h3>
              <Highlight language="jsx" codeString={codeBtnText}/>
            </div>
          </div>

          <div className="block">                    
            <div className = "chunk">
              <h2 className = "headline2">Outlined Button</h2>
              <p className="text-body1">Los botones resaltados son botones de énfasis medio. Contienen acciones que son importantes, pero no son la acción principal en una aplicación.</p>
            </div>
            <div className="chunk">
              <h3 className="headline3">Demo</h3>
              <Button
                name="Favorite"
                variant="btn--outlined"
                onClick={()=> console.log("Click")}
              />
              <Button
                name = "Favorite"
                icon = "favorite"
                variant = "btn--outlined"
                onClick = {()=> console.log("Click")}
              />
            </div>
            <div className="chunk">
              <h3 className="headline3">Code</h3>
              <Highlight language="jsx" codeString={codeBtnOutlined}/>
            </div>
          </div>

          <div className="block">
            <div className="chunk">
              <h2 className="headline2">Contained Button</h2>
              <p className="text-body1">Los botones contenidos tienen un énfasis alto y se distinguen por el uso de elevación y relleno. Contienen acciones que son primarias para su aplicación.</p>
            </div>
            <div className="chunk">
              <h3 className="headline3">Demo</h3>
              <Button
                name="Favorite"
                variant="btn--contained"
                onClick={()=> console.log("Click")}
              />
              <Button
                name="Favorite"
                icon = "favorite"
                variant="btn--contained"
                onClick={()=> console.log("Click")}
              />
            </div>
            <div className="chunk">
              <h3 className="headline3">Code</h3>
              <Highlight language="jsx" codeString={codeBtnContained}/>
            </div>
          </div>

          <div className="block">
            <div className="chunk">
              <h2 className="headline2">Icons Buttons</h2>
              <p className="text-body1">Los iconos se pueden usar como botones de alternancia cuando permiten seleccionar o anular la selección de una sola opción, como marcar un elemento como favorito.</p>
            </div>
            <div className="chunk">
              <h3 className="headline3">Demo</h3>
              <IconButton
                  name= 'menu'
                  onClick={() => console.log('click')}
              />
            </div>
            <div className="chunk">
              <h3 className="headline3">Code</h3>
              <Highlight language="jsx" codeString={codeBtnIcon}/>
            </div>
          </div>
        </main>
    );
}
 
export default PageButtons;
