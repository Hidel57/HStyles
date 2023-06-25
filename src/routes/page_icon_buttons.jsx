import IconButton from "../components/icon_button";

const PageIconButtons = () => {
    return (
        <div>
            <h1>Page Icon Buttons</h1>
            <h2>Text Button</h2>
            <IconButton
                name= 'menu'
                handleClick={() => console.log('click')}
            />
        </div>
    );
}
 
export default PageIconButtons;