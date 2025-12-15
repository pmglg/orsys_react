import React from "react";
import style from './Button.module.css'

const Button = ({ children, onButtonClick=()=>{}, bgColor='red' }) => {
  console.log(children);
  return (
    <button
      className={style.Button} // force le style du fichier css 
      style={{backgroundColor:bgColor}}
      onClick={(evt) => {
        onButtonClick(children);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
