import React from "react";
import style from './Button.module.css'

const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <button
      className={style.Button}
      onClick={(evt) => {
        onButtonClick(title);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
