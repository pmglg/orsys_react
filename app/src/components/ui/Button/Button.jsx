import React from "react";
import style from './Button.module.css'

const Button = ({ title, onButtonClick, bgColor }) => {
  console.log(title);
  return (
    <button
      className={style.Button} // force le style du fichier css 
      style={{backgroundColor:bgColor}}
      onClick={(evt) => {
        onButtonClick(title);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
