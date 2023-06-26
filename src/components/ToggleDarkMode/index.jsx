import './toggle_darkmode.css'
import { currentThemeFctn, switchTheme } from '../../custom/toggle_darkmode';

const ToggleDarkMode = () => {
  const handleOnChange = e => {
    switchTheme(e)
  }

  return (
    <div>
      <input
        className="checkbox" type="checkbox"
        name="checkbox" id="checkbox"
        onChange={handleOnChange}
        defaultChecked={currentThemeFctn()}
      />
      <label htmlFor="checkbox" className="theme-switch label">
        <span className="material-icons">dark_mode</span>
        <span className="material-icons">light_mode</span>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default ToggleDarkMode;