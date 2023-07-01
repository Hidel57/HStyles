import Banner from "../components/Banner";

const PageHome = () => {
    return (
        <main className="main-container">
            <Banner
                title="H Styles"
                subtitle="Styles from UI/UX"
            />
            <main className="main-content">
                <div className="hero-container">
                    <div className="article-container">
                        <div className="block snug">
                            <h1 className="headline1">!Welcome to HStyles!</h1>
                        </div>
                        <div className="block snug">
                            <p className="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil rerum accusantium nulla voluptates laborum quidem ipsum numquam recusandae dolorem, laboriosam quo, quae alias pariatur enim ab suscipit quisquam! Fugit!</p>
                        </div>
                    </div>
               </div>
            </main>
        </main>
    );
}
 
export default PageHome;
