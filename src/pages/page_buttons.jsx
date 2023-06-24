import Button from "../components/button";

const PageButtons = () => {
    return (
        <div>
            <h1>Page Buttons</h1>
            <h2>Text Button</h2>
            <Button
              name="Favorite"
              type="btn--text"
              handleClick={()=> console.log("Click")}
            />
            <h2>Refiled Button</h2>
            <Button
              name="Favorite"
              type="btn--refilled"
              handleClick={()=> console.log("Click")}
            />
            <h2>Outlined Button</h2>
            <Button
              name="Favorite"
              type="btn--outlined"
              handleClick={()=> console.log("Click")}
            />
        </div>
    );
}
 
export default PageButtons;