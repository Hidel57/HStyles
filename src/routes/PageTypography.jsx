import Highlight from "../components/Highlight";

const PageTypography = () => {

    const codeHeadlines = `<h1 className="headline1">Headline 1</h1>
<h2 className="headline2">Headline 2</h2>
<h3 className="headline3">Headline 3</h3>
<h4 className="headline4">Headline 4</h4>
<h5 className="headline5">Headline 5</h5>
<h6 className="headline6">Headline 6</h6>`

    return (
        <main className="content-container container">
            <div className="block">
                <h1 className="headline1">Typography</h1>
                <p className="text-body1">Los tamaños y estilos de texto de HStyles se desarrollaron para equilibrar la densidad del contenido y la comodidad de lectura en condiciones de uso típicas.</p>
                <p className="text-body1">MDC Typography es un módulo fundamental que aplica estos estilos a los componentes web de MDC. Los estilos tipográficos de este módulo se derivan de los siguientes estilos:</p>
                <ul>
                    <li>* Headline 1</li>
                    <li>* Headline 2</li>
                    <li>* Headline 3</li>
                    <li>* Headline 4</li>
                    <li>* Headline 5</li>
                    <li>* Headline 6</li>
                    <li>* subtitle 1</li>
                    <li>* subtitle 2</li>
                    <li>* body 1</li>
                    <li>* body 2</li>
                </ul>
            </div>
            <div className="block">
                <div className="chunk">
                    <h2 className="headline2">Headlines</h2>
                </div>
                <div className="chunk">
                    <h3 className="headline3">Demo</h3>
                    <p className="headline1">Headline 1</p>
                    <p className="headline2">Headline 2</p>
                    <p className="headline3">Headline 3</p>
                    <p className="headline4">Headline 4</p>
                    <p className="headline5">Headline 5</p>
                    <p className="headline6">Headline 6</p>
                </div>
                <div className="chunk">
                    <h3 className="headline3">Code</h3>
                    <Highlight language="jsx" codeString={codeHeadlines}/>
                </div>
            </div>
        </main>
    );
}

export default PageTypography;
