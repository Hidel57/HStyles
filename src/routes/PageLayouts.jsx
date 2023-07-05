import Highlight from "../components/Highlight";

const PageLayouts = () => {
const codeString = `<div className="App">
    <header>
        <NavBar />
    </header>
    <div className="body body--drawer">
        <div className="content-drawer">
            <Drawer />
        </div>
        <div className="content">
            <Routes>...</Routes>
            <Footer />
        </div>
    </div>
    </div>`

    return (
        <div className="content-container container">
            <div className="block">
                <h1 className="headline1">Layouts</h1>
            </div>
            <div className="block">
                <div className="chunk">
                    <h2 className="headline2">Basic Layout</h2>
                </div>
                <div className="chunk">
                    <h3 className="headline3">Format</h3>
                    <div style={{padding: "1rem", backgroundColor: "#575757", borderRadius: "16px"}}>
                        <div style={{borderRadius: "16px"}}>
                            <header 
                                style={{backgroundColor: "var(--color-surface-dp4)", width: "100%", height: "72px", padding: "1rem", borderBottom: "2px solid #575757"}
                            }>
                                <p className="headline3">Header</p>
                            </header>
                            <div style={{height: "320px", width: "100%", backgroundColor: "var(--color-surface-dp0)", padding: "1rem",display:"flex"}}>
                                <aside style={{width:"250px", height:"100%", backgroundColor: "var(--color-surface-dp0)", borderRight: "2px solid #575757"}}>
                                    <p className="headline3">Drawer</p>
                                </aside>
                                <div style={{width:"100%", height:"100%", backgroundColor: "var(--color-surface-dp0)", padding: "1rem"}}>
                                    <div style={{height: "200px", width: "100%", backgroundColor: "var(--color-surface-dp0)", display:"flex", flexDirection: "column"}}>
                                        <p className="headline3">Content</p>
                                    </div>
                                    <footer
                                        style={{backgroundColor: "var(--color-surface-dp0)", borderTop: "2px solid #575757"}}
                                    >
                                        <p className="headline3">Footer</p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chunk">
                    <h3 className="headline3">Code</h3>
                    <Highlight language="jsx" codeString={codeString}/>
                </div>
            </div>
        </div>
    );
}
 
export default PageLayouts;