import React from 'react';
import { themeContext } from '../../Context';
import './FloatingDiv.css';
const FloatingDiv = ({ image, text1, text2 }) => {
  const { state, dispatch } = React.useContext(themeContext);
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span className={state.darkMode ? 'f-darkMode' : ''}>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
