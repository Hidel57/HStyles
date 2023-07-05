import IconButton from '../IconButton';
import Button from '../Button';
import './cards.css'

const Card = ({card}) => {
    return (
        <div className='card'>
            <div className="card__primary">
                <div className="card__media">
                    <img
                    className="img-responsive"
                    src={card.img}
                    alt="img card" />
                </div>
                <div className="card__info-primary">
                    <div className="headline6">{card.title}</div>
                    <div className="subtitle1">{card.subtitle}</div>
                </div>
                <div className="card__info-secondary">
                    <div className="card__description">
                        <p className="text-body2">{card.description}</p>
                    </div>
                </div>
            </div>
            <div className="card__actions">
                <div className="card__actions-buttons">
                    <Button
                        name = "Read"
                        variant = "btn--text"
                        onClick = {()=> console.log("Click")}
                    />
                </div>
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