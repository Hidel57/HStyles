import IconButton from '../IconButton';
import './cards.css'

const Card = () => {
    return (
        <div className='card'>
            <div className="card__primary">
                <div className="card__media">
                    <img
                    src="https://img.freepik.com/fotos-premium/vertical-joven-mujer-moderna-ropa-verano-al-aire-libre_475667-1207.jpg"
                    alt="img card" />
                </div>
                <div className="card__info-primary">
                    <div className="card__title">Card Title</div>
                    <div className="card__subtitle">Card Subtitle</div>
                </div>
                <div className="card__info-secondary">
                    <div className="card__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quae accusantium dolore praesentium vitae minus ullam laboriosam itaque. Alias non porro aperiam eum, autem cupiditate quod. Magni enim eligendi et.</div>
                </div>
            </div>
            <div className="card__actions">
                <div className="card__actions-buttons"></div>
                <div className="card__actions-icons">
                    <IconButton
                        name="favorite"
                        handleClick={()=> console.log('click')}
                    />
                    <IconButton
                        name="shopping_cart"
                        handleClick={()=> console.log('click')}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Card;