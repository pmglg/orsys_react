import React, { type ReactElement } from "react";
import style from "./Button.module.css";

interface IButtonProps {
  children: string | React.ReactElement | Array<string | ReactElement>;
  onButtonClick?: () => void;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onButtonClick,
  bgColor = "red",
  type = "button",
}: IButtonProps) => {
  //console.log(children);
  return (
    <button
      type={type}
      className={style.Button} // force le style du fichier css
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
