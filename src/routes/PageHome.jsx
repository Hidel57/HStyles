import Banner from "../components/Banner";

const PageHome = () => {
    return (
        <main className="content-container container">
            <div className="block">
                <Banner
                    title="H Styles"
                    subtitle="Styles from UI/UX"
                />
            </div>
            <div className="block">
                <h1 className="headline1">!Welcome to HStyles!</h1>
            </div>
            <div className="block">
                <p className="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil rerum accusantium nulla voluptates laborum quidem ipsum numquam recusandae dolorem, laboriosam quo, quae alias pariatur enim ab suscipit quisquam! Fugit!</p>
            </div>
        </main>
    );
}
 
export default PageHome;
