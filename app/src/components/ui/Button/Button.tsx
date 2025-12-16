import React, { useEffect, useState, type ReactElement } from "react";
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
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
      setTimeout(()=> {setIsClicked(false)}, 200) //versus setInterval qui se repete
    
    return () => {}

  }, [isClicked])

  //console.log(isClicked);
  return (
    <button
      type={type}
      className={`${style.Button}${isClicked ? ` ${style.clicked}` : ""}`} 
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setIsClicked(true);
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
      <br/>
      {}
    </button>
  );
};

export default Button;
