import Banner from "../components/Banner";
import Highlight from "../components/Highlight";

const PageDrawers = () => {
    const codeJsx = `<Banner
    title="Banner Title"
    subtitle="Banner Subtitle"
    alingItems="center" // "end" "start"(default)
/>`
    const codeCss = `.banner-hero {
  border-radius: 32px;
  width: 100%;
  height: 320px;
  background-color: #000;
}`

    return (
        <div className="content-container container">
            <div className="block">
                <h1 className="headline1">Drawers</h1>
            </div>
            <div className="block">
                <div className="chunk">
                  <h2 className="headline2">Demo</h2>
                  <Banner
                  title="Banner Title"
                  subtitle="Banner Subtitle"
                  alingItems="end"
                  />
                </div>
                <div className="chunk">
                    <h2 className="headline2">Code</h2>
                    <h3 className="headline3">Component</h3>
                    <Highlight language= "jsx" codeString={codeJsx}/>
                    <h3 className="headline3">Styles</h3>
                    <Highlight language= "css" codeString={codeCss}/>
                </div>
            </div>
        </div>
    );
}
 
export default PageDrawers;
