import './footer.css' 

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="row">
                    {props.info.map(items => (
                        <div className="item col-md-6 col-lg-3" key={items.title}>
                            <p className='item-title'>{items.title}</p>
                            {items.items.map(item => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Footer;