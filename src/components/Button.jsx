import React from "react";

const Button = ({ bg, fg, hoverBg, text }) => {
  return (
    <button
      className={`px-3 py-2 rounded-md ${bg && bg} ${
        hoverBg && `hover:${hoverBg}`
      } ${fg && fg}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  bg: "bg-red-500",
  fg: "text-white",
  hoverBg: "bg-red-400",
  text: "Button text",
};
export default Button;
