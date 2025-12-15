import React from "react";

const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <div
      className="Button"
      onClick={(evt) => {
        onButtonClick(title);
      }}
    >
      {title}
    </div>
  );
};

export default Button;
