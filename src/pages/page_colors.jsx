import img_girasol from '../images/girasoles.jpg'
import img_neutral_colors from '../images/neutral_colors.png'

const PageColors = () => {
    return (
        <div>
            <h1>Colors</h1>
            <p>Para generar colores el usuario puede implementarlos desde cualquier cosa en comun que pueda observar por ejemplo la naturaleza, en este ejemplo imlementaremos los colores de un girasol</p>
            <img src={img_girasol} alt="girasoles" width={500}/>
            <p>Como en la imagen que incluye el girasol, son los colores que vamos a implemetar para este ejemplo de ahi saldran los colores para nuestro desarrollo</p>
            <h2>Key Colors</h2>
            <p>descomponeremos los colores del girasol utilizando extenciones como eye droper. una vez extraidos lo sellecionamos </p>
            <div style={{display: "inline-block", width: "24px", height:"24px", backgroundColor: "#fcbb00"} }></div>
            <p style={{display: "inline", paddingLeft:"16px"}}>primary color</p>
            <div style={{display: "inline-block", width: "24px", height:"24px", backgroundColor: "#1f0a00"} }></div>
            <p style={{display: "inline", paddingLeft:"16px"}}>secondary color</p>
            <div style={{display: "inline-block", width: "24px", height:"24px", backgroundColor: "#7f8f2c"} }></div>
            <p style={{display: "inline", paddingLeft:"16px"}}>terciary color</p>
            <h3>primary color</h3>
            <p>Un color primario es el color que se muestra con mayor frecuencia en las pantallas y los componentes de su aplicación</p>
            <h4>Dark and light primary variants</h4>
            <p>Your primary color can be used to make a color theme for your app, including dark and light primary color variants.</p>
            <h3>secondary color</h3>
            <p>Un color secundario proporciona más formas de acentuar y distinguir su producto. Tener un color secundario es opcional y debe aplicarse con moderación para acentuar partes seleccionadas de su interfaz de usuario</p>
            <p>Si no tiene un color secundario, su color primario también se puede usar para acentuar elementos</p>
            <p>En este caso utiizarfemos el tono de paletas del color primario, ya que el secundario es similar a uno de ellos, el color tercero puede ser obcional pa mensajes o fondos de tarjetas especificas </p>
            <p>para obtener el tono de paletas del color primario existen varias plataformas como el de material ui y otras, por la simplicidad, sencilles y eficacia que nos genera nosostros acudiremos a la pagina de <a href='uicolors.app/create'>uicolors</a> donde proporsionaremos el color principal y nos generara un apaleta total del mismo que podremos exportas en diferentes extensiones</p>
            <p>Para este ejemplo exportamos en simple codigo css ya que sera lo que manejaremos en todo el desarrollo</p>
            <h4>Extraxcion del Paleta de tonos del Color Primario</h4>
            <pre><code>
                --selective-yellow-50: #fffeea;
                --selective-yellow-100: #fffbc5;
                --selective-yellow-200: #fff785;
                --selective-yellow-300: #ffec46;
                --selective-yellow-400: #ffdd1b;
                --selective-yellow-500: #fcbb00;
                --selective-yellow-600: #e29200;
                --selective-yellow-700: #bb6702;
                --selective-yellow-800: #984f08;
                --selective-yellow-900: #7c410b;
                --selective-yellow-950: #482100;
            </code></pre>

            <h2>Neutral Colors</h2>
            <p>El color clave neutral se usa para derivar roles de color de superficie para fondos, así como colores usados ​​para texto e íconos de alto énfasis.</p>
            <p>The neutral variant key color is used to derive color roles for medium emphasis elements like text, icons, and component outlines. </p>
            <img src={img_neutral_colors} alt="neutral colors" width={500}/>
            <h3>Error Colors</h3>

        </div>
    );
}
 
export default PageColors;