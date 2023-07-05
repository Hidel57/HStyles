import Highlight from "../components/Highlight";

const PageColors = () => {
    const codePalette=`--color-base-50: #fef2f4;
--color-base-100: #fde6e9;
--color-base-200: #fbd0d9;
--color-base-300: #f7aab9;
--color-base-400: #f27a93;
--color-base-500: #e63f66; /* <-- primary color */
--color-base-600: #d42a5b;
--color-base-700: #b21e4b;
--color-base-800: #951c45;
--color-base-900: #801b40;
--color-base-950: #470a1f;`
    const colorNeutral = `--color-neutral-0: rgb(0,0,0);
--color-neutral-10: rgb(20,20,20);
--color-neutral-20: rgb(30,30,30);
--color-neutral-30: rgb(40,40,40);
--color-neutral-40: rgb(67,67,67);
--color-neutral-50: rgb(90,90,90);
--color-neutral-60: rgb(140,140,140);
--color-neutral-70: rgb(190,190,190);
--color-neutral-80: rgb(217,217,217);
--color-neutral-90: rgb(240,240,240);
--color-neutral-95: rgb(245, 245, 245);
--color-neutral-97: rgb(250,250,250);
--color-neutral-100: rgb(255,255,255);`

    return (
        <div className='content-container'>
            <div className="hero-container">
                <div className="block">
                    <h1 className="headline1">Colors</h1>
                    <p className="text-body1">H Styles interpreta el sistema de color en dos niveles: un sistema de color a nivel de sistema y un sistema de color a nivel de producto.</p>
                    <p className="text-body1">
                        El sistema de color a nivel de sistema define principalmente la paleta de colores básica, la paleta de colores neutros y la paleta de colores de visualización de datos en el diseño de Ant Financial. 
                    </p>
                    <p className="text-body1">
                        El sistema de color a nivel de producto se encuentra en el proceso de diseño específico, basado en el color del sistema para definir aún más el tono del producto de acuerdo con los requisitos y la función del color.
                    </p>
                </div>
                <div className="block">
                    <div className="chunk">
                        <h2 className="headline2">Color System</h2>
                        <p className="text-body1">
                            El sistema de color de H Styles lo ayuda a aplicar color a su interfaz de usuario de manera significativa. 
                            En este sistema, selecciona un color primario y secundario si es nesesario o solicitado para representar su marca. 
                            Las variantes oscuras y claras de cada color se pueden aplicar a su interfaz de usuario de diferentes maneras.
                        </p>
                    </div>
                    <div className="chunk">
                        <h3 className="headline3">Base Color Palette</h3>
                        <p className="text-body1">Los temas de color están diseñados para ser armoniosos, garantizar texto accesible y distinguir elementos y superficies de la interfaz de usuario entre sí.</p>
                        <p className="text-body1">Existen diversidad de plataformas que están disponibles para ayudarlo a seleccionar la paleta colores</p>
                        <ul>
                            <li><a target="_blank" href="https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors">Material Desing pallet Tool</a></li>
                            <li><a target="_blank" href="https://ant.design/docs/spec/colors#palette-generation-tool">Ant Desing Pallete Generation Tool</a></li>
                            <li><a target="_blank" href="https://uicolors.app/create">Tailwind CSS Color Generator</a></li>
                        </ul>
                        <p className="text-body1">
                            Todas las plataformas nos proporciona su paleta de colores segun su algoritmo establecido de acuerdo a sus estandares y principios.
                            Por lo cual cada paleta es de diferente algoritmo, generando diferentes variantes de colores. 
                            Por preferencia personal y como ejemplo seleccionaremos la de <a target="_blank" href="https://uicolors.app/create">Tailwind CSS Color Generator</a>
                        </p>
                    </div>
                    <div className="chunk">
                        <h4 className="headline4">Base Color Palette</h4>
                        <p className="text-body1">
                            Las paletas de colores se pueden generar en función del color de entrada primario y si la paleta deseada debe ser análoga, complementaria o triádica en relación con el color primario.
                            Como ejemplo seleccionaremos el color <span className="color-primary">#e63f66</span> </p>
                            <Highlight language="css" codeString={codePalette}/>
                    </div>
                    <div className="chunk">
                        <h4 className="headline4">Neutral Color Pallete</h4>
                        <Highlight language="css" codeString={colorNeutral}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default PageColors;