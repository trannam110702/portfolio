import React from 'react';
import './Toggle.css';
import { themeContext } from '../../Context';
const Toggle = () => {
  const theme = React.useContext(themeContext);
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: 'toggle' });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <i className="fa-regular fa-sun"></i>
      <i className="fa-regular fa-moon"></i>
      <div
        className="t-button"
        style={theme.state.darkMode ? { left: 'calc(1.2rem + 2px)' } : {}}
      ></div>
    </div>
  );
};

export default Toggle;
