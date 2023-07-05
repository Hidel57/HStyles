import Card from "../components/Card";

const PageCards = () => {
    const card = {
        title: "title card",
        subtitle: "subtitle card",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tenetur atque vero laudantium iste illum repudiandae, dolor, at sit, laboriosam quasi ipsum iure in amet consequatur fuga! Magni, voluptatibus dolorem?",
        img: "https://dummyimage.com/300x300/777777/fff&text=Card"
    }
    return (
        <main className="content-container">
            <div className="hero-container">
                <div className="block">
                    <h1 className="headline1">Cards</h1>
                </div>
                <div className="block">
                    <Card
                        card={card}
                    />
                </div>
            </div>
        </main>
    );
}
 
export default PageCards;
